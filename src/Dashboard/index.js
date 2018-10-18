import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './dashboard.css';
import logo1 from './intro-header1.jpg';
import logo2 from './intro-header2.jpg'
import chart1 from './wykres.png'
import chart2 from './wykres3.png'
import chart3 from './wykres4.png'
import chart4 from './wykres5.png'



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

function CenteredGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <img className="main-foto" src={logo1} alt="intro-header"/>
                </Grid>
                <Grid item xs={6}>
                    <img className="main-foto" src={logo2} alt="intro-header2"/>
                </Grid>
                <Grid item xs={6}>

                    <img className="chart" src={chart1} alt="chart"/>
                </Grid>
                <Grid item xs={6}>
                    <img className="chart" src={chart3} alt="chart2"/>
                </Grid>
                <Grid item xs={6}>
                    <img className="chart" src={chart2} alt="chart3"/>
                </Grid>
                <Grid item xs={6}>
                    <img className="chart" src={chart4} alt="chart4"/>
                </Grid>

            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);


// import React, {Fragment} from  'react';
//
//
// function Dashboard() {
//     return (
//         <Fragment>
//             <h1>Zrób zakupy razem z nami</h1>
//         </Fragment>
//     )}
//
// export default Dashboard;
