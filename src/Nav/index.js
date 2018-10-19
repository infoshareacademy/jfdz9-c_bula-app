import React, {Fragment} from 'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Button from "@material-ui/core/es/Button/Button";
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './nav.css';
// import SignIn from './SignIn/index.js';
// import SignUp from './SignUp';


function Nav() {
    return (
        <Fragment>
            <AppBar position="static" className="navigation">
                <Toolbar>
                    <Button>
                        <Link to="/dashboard"><img src={logo} alt="logo C-bulla"/></Link>
                    </Button>

                    <div className="navButtonAll">
                        <Button className="navButton">
                            <Link to="/home">Wyszukaj</Link>
                        </Button>
                        <Button className="navButton">
                            <Link to="/signIn">Sign In</Link>
                        </Button>
                        <Button className="navButton">
                            <Link to="/signUp">Sign Up</Link>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Nav;
