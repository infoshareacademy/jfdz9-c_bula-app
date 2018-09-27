import React, { Fragment } from 'react';
import List from './List'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar';


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
                            <Paper>
                                <Sidebar/>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <List />
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
