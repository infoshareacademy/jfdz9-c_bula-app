import React, {Fragment} from 'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Button from "@material-ui/core/es/Button/Button";
import {Link} from 'react-router-dom';
import logo from './logo.png';
import signin from './signin.svg';
import signup from './signup.svg';
import search from './search.svg';

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
                            <Link to="/home"><img src={search} alt=""/>
                                <div className="navButtonIcon">Wyszukaj</div>
                            </Link>
                        </Button>
                        <Button className="navButton">
                            <Link to="/signIn"><img src={signin} alt=""/>
                                <div className="navButtonIcon">Zaloguj</div>
                            </Link>
                        </Button>
                        <Button className="navButton">
                            <Link to="/signUp"><img src={signup} alt=""/>
                                <div className="navButtonIcon">Zarejestruj</div>
                            </Link>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Nav;
