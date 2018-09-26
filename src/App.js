import React, { Fragment } from 'react';
import List from './List'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function App() {

        return ( <Fragment>

                <div>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Paper>Navigation <h1>tu bedzie strona glowna</h1></Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper>input</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>Filter</Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper><List /></Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper>Footer</Paper>
                        </Grid>

                    </Grid>
                </div>

            </Fragment>
        );
}

export default App;
