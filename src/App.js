import React, {Component, Fragment} from 'react';
import List from './List'
import Home from './Home'
import SignIn2 from './SignIn'
import Grid from '@material-ui/core/Grid';
import CheckboxesGroup from "./Sidebar/CheckboxesGroup";
import ControlledOpenSelect from "./Sidebar/ControlledOpenSelect";
import SignUp from "./Auth/signUp";
import SignIn from "./Auth/signIn";
import Auth from "./Auth/auth";
import AdminPanel from "./AdminPanel/adminPanel";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';


class App extends Component {

    render() {

        return (<Fragment>
                <Router>
                    <div>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <Nav/>
                            </Grid>
                            <Grid item xs={12}>
                                <Route path="/SignIn" component={SignIn}/>
                                <Route path="/SignUp" component={SignUp}/>
                                <Route path="/AdminPanel" component={AdminPanel}/>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/home" component={Home}/>
                                <Route path="/signIn2" component={SignIn2}/>
                            </Grid>
                        </Grid>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default App;
