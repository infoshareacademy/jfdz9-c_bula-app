import React, {Component, Fragment} from 'react';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Grid from '@material-ui/core/Grid';
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
                            <Grid>
                                <Switch>
                                    <Route exact path="/" component={Dashboard}/>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/signIn" component={SignIn}/>
                                    <Route path="/signUp" component={SignUp}/>
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
