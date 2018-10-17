import React, {Component, Fragment} from 'react';
import List from './List'
import Home from './Home'
import SignIn from './SignIn'
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
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/list" component={List}/>
                                <Route path="/home" component={Home}/>
                                <Route path="/signIn" component={SignIn}/>
                            </Grid>
                        </Grid>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default App;
