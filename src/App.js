import React, {Component, Fragment } from 'react';
import Home from './Home';
import Grid from '@material-ui/core/Grid';
import SignUp from "./Auth/signUp";
import SignIn from "./Auth/signIn";
import AdminPanel from "./AdminPanel/adminPanel";
import {
    BrowserRouter as Router,
    Route,
    Switch
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
                                <Switch>
                                   <Route exact path="/" component={Dashboard}/>
                                   <Route path="/home" component={Home}/>
                                   <Route path="/SignIn" component={SignIn}/>
                                   <Route path="/SignUp" component={SignUp}/>
                                  <Route path="/AdminPanel" component={AdminPanel}/>
                                </Switch>
                            </Grid>
                        </Grid>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default App;
