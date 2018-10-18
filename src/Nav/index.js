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
                        <li><Link to="/dashboard"><img src={logo} alt="logo C-bulla"/></Link></li>
                    </IconButton>

                    {/*<Typography variant="title" color="inherit">*/}
                    {/*C-Bulla Aplication*/}
                    {/*</Typography>*/}
                    <Button color="inherit"><li><Link to="/dashboard">Strona główna</Link></li></Button>
                    {/*<Button color="inherit"><li><Link to="/list">List</Link></li></Button>*/}
                    <Button color="inherit"><li><Link to="/home">Wyszukaj</Link></li></Button>
                    <Button color="inherit"><li><Link to="/signIn">Zaloguj</Link></li></Button>
                    <Button color="inherit"><li><Link to="/signIn">Zarejestruj</Link></li></Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    )}

export default Nav;
