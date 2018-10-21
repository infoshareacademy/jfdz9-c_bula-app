import React, {Fragment} from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Button from "@material-ui/core/Button/Button";
import {Link} from 'react-router-dom';
import logo from './logo.png';
import signin from './signin.svg';
import signup from './signup.svg';
import search from './search.svg';
import './nav.css';
import Logout from ".././Auth/logout";
import IsAdmin from ".././Auth/isAdmin";


function Nav() {
    return (
        <Fragment>
            <AppBar position="static" className="navigation">
                <Toolbar className="styleNav">
                    <Button>
                        <Link to="/dashboard"><img src={logo} alt="logo C-bulla"/></Link>
                    </Button>
                    <div className="navButtonAll">
                        <Button className="navButton">
                            <Link to="/home"><img src={search} alt=""/>
                                <div className="navButtonIcon">Wyszukaj</div>
                            </Link>
                        </Button>
                        <Logout>
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
                        </Logout>
                        <IsAdmin>
                            <Button className="navButton">
                                <Link to="/adminPanel"><img src={signin} alt=""/>
                                    <div className="navButtonIcon">Administrator</div>
                                </Link>
                            </Button>
                        </IsAdmin>
                    </div>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Nav;
