import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 600,
        padding: theme.spacing.unit * 2,
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
});

class List extends Component {

    state = {
        shops: []
    };

   componentDidMount() {
       fetch('/data/shops.json')
           .then(response => response.json())
           .then(shops => {
               this.setState({
                   shops: shops,
               })
           })
};

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                    {this.state.shops.map(shop => {
                        return <div key={shop.id}>
                            <Paper>
                                <Grid container spacing={16}>
                                    {/*<Grid item>*/}
                                    {/*<ButtonBase className={classes.image}>*/}
                                    {/*<img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />*/}
                                    {/*</ButtonBase>*/}
                                    {/*</Grid>*/}
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={16}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subheading">
                                                    {shop.name}
                                                </Typography>
                                                <Typography gutterBottom>{shop.description}</Typography>
                                                <Typography color="textSecondary">{shop.address.postalCode} {shop.address.district} {shop.address.street}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subheading">{`Pn-Pt ${shop.openingHours.weekday_open} - ${shop.openingHours.weekday_close}`}</Typography>
                                            <Typography variant="subheading">{`Sb ${shop.openingHours.saturday_open} - ${shop.openingHours.saturday_close}`}</Typography>
                                            <Typography variant="subheading">{`Nd ${shop.openingHours.sunday_open} - ${shop.openingHours.sunday_close}`}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                    })}



            </Fragment>
    );
    }
}

export default List;
