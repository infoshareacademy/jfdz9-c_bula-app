import React, { Component, Fragment } from 'react';
import List from './List'
import Search from './Search/index'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';



class App extends Component {

    state = {
        postalCode: '',
    };

    onFormSubmit = event => {
        console.log(event);

        this.setState({
            postalCode: event,
        })


    };

    render() {

        return (<Fragment>
                <Router>
                    <div>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <Nav/>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper><Search onFormSubmit={this.onFormSubmit}/></Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper>Filter</Paper>
                            </Grid>
                            <Grid item xs={8}>
                                <Paper><List postalCode={this.state.postalCode}/></Paper>
                                <Route path="/dashboard" component={Dashboard}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper>Footer</Paper>
                            </Grid>

                        </Grid>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default App;
