import React, {Component, Fragment} from 'react';
// import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import Favorite from '@material-ui/icons/Favorite';


const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 600,
        padding: theme.spacing.unit * 5,
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

class List extends Component {


    render() {
        const {classes} = this.props;
        // const {value} = this.state;

        return (
            <Fragment>

                {this.props.shops.filter(
                    shop => shop.address.postalCode.includes(this.props.postalCode)
                ).filter(
                    shop => (this.props.selectedCategoryIds.length > 0) ? (shop.category_id.some(id => this.props.selectedCategoryIds.includes(id))) : true
                ).map(
                    shop => (
                        <div key={shop.id}>
                            <Paper>
                                <Grid container spacing={24}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="logo-sklepu" src={shop.image}/>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={16}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="display1">
                                                    {shop.name}
                                                </Typography>
                                                <Typography color="textSecondary">
                                                    {shop.address.postalCode} {shop.address.district} {shop.address.street}
                                                </Typography>
                                                <Typography variant="subheading" gutterBottom>
                                                    {shop.description}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                color="textSecondary">{`Pn-Pt ${shop.openingHours.weekday_open} - ${shop.openingHours.weekday_close}`}</Typography>
                                            <Typography
                                                color="textSecondary">{`Sb ${shop.openingHours.saturday_open} - ${shop.openingHours.saturday_close}`}</Typography>
                                            <Typography
                                                color="textSecondary">{`Nd ${shop.openingHours.sunday_open} - ${shop.openingHours.sunday_close}`}</Typography>

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