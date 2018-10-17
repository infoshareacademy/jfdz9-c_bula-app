import React,{Fragment} from  'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Button from "@material-ui/core/es/Button/Button";
import Typography from "@material-ui/core/es/Typography/Typography";
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './nav.css';

function Nav() {

    return (
        <Fragment>
            <AppBar className="navigation">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <li><Link to="/App.js"><img src={logo} alt="logo C-bulla"/></Link></li>
                    </IconButton>

                    <Typography variant="title" color="inherit">
                    C-Bulla Aplication
                    </Typography>
                    <Button color="inherit"><li><Link to="/Dashboard/index.js">Dashboard</Link></li></Button>
                    <Button color="inherit"><li><Link to="/List/index.js">List</Link></li></Button>
                    <Button color="inherit"><li><Link to="/App.js">Home</Link></li></Button>
                    <Button color="inherit"><li><Link to="/SignIn">Zaloguj</Link></li></Button>
                    <Button color="inherit"><li><Link to="/SignUp">Zarejestruj</Link></li></Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    )}

export default Nav;