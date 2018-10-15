import React, {Component, Fragment} from 'react';
import List from './List'
import Search from './Search'
import SignIn from './SignIn'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CheckboxesGroup from "./Sidebar/CheckboxesGroup";
import ControlledOpenSelect from "./Sidebar/ControlledOpenSelect";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';


class Home extends Component {

    state = {
        postalCode: '',
        categoryIds: []
    };

    setCategoryIds = categoryIds => {
        this.setState({
            categoryIds
        })
    }


    onFormSubmit = event => {
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
                                <Paper>
                                    <CheckboxesGroup setCategoryIds={this.setCategoryIds}/>
                                    <ControlledOpenSelect/>
                                </Paper>
                            </Grid>
                            <Grid item xs={8}>
                                <Paper><List postalCode={this.state.postalCode} selectedCategoryIds={this.state.categoryIds}/></Paper>
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/list" component={List}/>
                                <Route path="/signIn" component={SignIn}/>
                            </Grid>
                        </Grid>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default Home;
