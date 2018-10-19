import React,{Fragment} from  'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Button from "@material-ui/core/es/Button/Button";
import Typography from "@material-ui/core/es/Typography/Typography";
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './nav.css';

import Logout from ".././Auth/logout";
import IsAdmin from ".././Auth/isAdmin";

function Nav() {
    return (
        <Fragment>
            <AppBar className="navigation">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <li><Link to="/dashboard"><img src={logo} alt="logo C-bulla"/></Link></li>
                    </IconButton>

                    {/*<Typography variant="title" color="inherit">*/}
                    {/*C-Bulla Aplication*/}
                    {/*</Typography>*/}
                    <Button color="inherit"><li><Link to="/dashboard">Strona główna</Link></li></Button>
                    {/*<Button color="inherit"><li><Link to="/list">List</Link></li></Button>*/}
                    <Button color="inherit"><li><Link to="/home">Wyszukaj</Link></li></Button>
                    <Logout>
                        <Button color="inherit"><li><Link to="/SignIn">Zaloguj</Link></li></Button>
                        <Button color="inherit"><li><Link to="/SignUp">Zarejestruj</Link></li></Button>
                    </Logout>
                    <IsAdmin>
                    <Button color="inherit"><li><Link to="/AdminPanel">Panel Administratora</Link></li></Button>
                    </IsAdmin>
                </Toolbar>
            </AppBar>
        </Fragment>
    )}

export default Nav;