import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './dashboard.css';
import logo1 from './intro-header1.png';
import logo2 from './intro-header2.png'
import chart1 from './wykres.png'
import chart3 from './wykres4.png'
import chart4 from './wykres5.png'
import cebula from './cebula.png'
import ChartLine from "./ChartLine";
import ChartBlue from "./ChartBlue";
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function Dashboard(props) {

    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12} lg={6}>
                    <img className="main-foto" src={logo1} alt="intro-header"/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <img className="main-foto" src={logo2} alt="intro-header2"/>
                </Grid>
                <Grid item xs={12}>
                    <img className="chart" src={cebula} alt="chart"/>
                </Grid>
                <Grid style={{display: 'flex', justifyContent: 'center'}} item xs={12} md={6}>
                    <ChartLine/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ChartBlue/>
                </Grid>
            </Grid>
        </div>
    )
}


Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);

