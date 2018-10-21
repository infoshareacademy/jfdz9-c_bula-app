import React, {Component, Fragment} from 'react';
// import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import firebase from "firebase";
import IsAdmin from "../Auth/isAdmin";

// import Favorite from '@material-ui/icons/Favorite';


const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 600,
        padding: theme.spacing.unit,
        marginBottom: 30,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    favoriteIcon: {
        color: 'green',
    }
});
const styleShopContener = {
    padding: '20px 0px 20px 30px',
};
const styleShopItem = {
    paddingLeft: '30px',
};
const styleShopOpenHours = {
    fontSize: '12px',
    padding: '40px 40px 0 0',
};
const styleMargin = {
    margin: '0',
};
class List extends Component {
    handleDelete = shopId => event => {
        firebase.database().ref(`/shops/${shopId}`).remove();
    };

    filter() {
        return this.props.shops.filter(
            shop => shop.address.postalCode.includes(this.props.postalCode)
        ).filter(
            shop => this.props.selectedCategoryIds.length > 0 ? shop.category_id.some(id => this.props.selectedCategoryIds.includes(id)) : true
        ).filter(
            shop => this.props.district ? shop.address.district === this.props.district : true
        )
    }
    render() {
        const {classes} = this.props;

        return (
            <Fragment>

                {this.filter().length === 0 ? <h2>Pod tym kodem nie ma żadnych sklepów</h2> : this.filter().map(
                    shop => (
                        <div key={shop.sid}>

                            <Paper>
                                <Grid container spacing={24} style={styleMargin}>
                                    <Grid item style={styleShopContener}>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="logo-sklepu" src={shop.image}/>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={16}>
                                            <Grid style={styleShopItem} item xs>
                                                <Typography gutterBottom>
                                                    <h1>{shop.name}</h1>
                                                </Typography>
                                                <Typography color="textSecondary">
                                                    {shop.address.postalCode} {shop.address.district} {shop.address.street}
                                                </Typography>
                                                <Typography gutterBottom>
                                                    <p>{shop.description}</p>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item style={styleShopOpenHours}>
                                            <Typography
                                                color="textSecondary">{`Pn-Pt: ${shop.openingHours.weekday_open} - ${shop.openingHours.weekday_close}`}</Typography>
                                            <Typography
                                                color="textSecondary">{`Sb: ${shop.openingHours.saturday_open} - ${shop.openingHours.saturday_close}`}</Typography>
                                            <Typography
                                                color="textSecondary">{`Nd: ${shop.openingHours.sunday_open} - ${shop.openingHours.sunday_close}`}</Typography>
                                            <IsAdmin>
                                                <button className="buttonFormSideBar" style={{fontWeight: 'bold', marginTop: '5px', backgroundColor: 'lightgrey', color: '#444444'}} onClick={this.handleDelete(shop.sid)}>Usun</button>
                                            </IsAdmin>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                    )
                )}
            </Fragment>
        );
    }
}


export default withStyles(styles)(List);