import './dashboard.css';
import React, {Component} from 'react';
import {Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import Grid from '@material-ui/core/Grid'
import ChartLine from "./ChartLine";
import ChartBlue from "./ChartBlue";


class Dashboard extends Component {

    render() {
        return (
            <Grid container>
                <Grid item xs={12} md={6}
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                >
                    <ChartLine/>

                </Grid>
                <Grid item xs={12} md={6}
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                >

                    <ChartBlue/>
                </Grid>
            </Grid>
        )
    }
}

export default Dashboard;