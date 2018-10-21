import './dashboard.css';
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import ChartLine from "./ChartLine";
import ChartBlue from "./ChartBlue";
import Paper from '@material-ui/core/Paper';


class Dashboard extends Component {

    render() {
        return (
            <Grid container spacing={24}>
                <Paper style={{margin: '20px'}}>
                <Grid item xs={12} md={6}
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                >
                    <ChartLine/>
                </Grid>
                </Paper>
                <Paper style={{margin: '20px'}}>
                <Grid item xs={12} md={6}
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                >
                    <ChartBlue/>
                </Grid>
                </Paper>
            </Grid>
        )
    }
}

export default Dashboard;