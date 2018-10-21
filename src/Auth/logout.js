import React, { Component, Fragment } from 'react'
import Button from "@material-ui/core/es/Button/Button";
import firebase from 'firebase'
import {Link} from 'react-router-dom';
import logout from '.././Nav/logout.png';

class Logout extends Component {
    state = {
        user: null
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            user => this.setState({
                user
            }, () => console.log(this.state))
        )
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {
                    this.state.user ?
                        <Fragment>
                            <p style={{color: 'black', margin: '0 20px 0 20px', marginTop: '40px'}}>{this.state.user.email}</p>
                            <Button className="navButton" onClick={() => firebase.auth().signOut()}>
                                <Link to="/"><img src={logout} alt=""/>
                                    <div className="navButtonIcon">Wyloguj</div>
                                </Link>
                            </Button>
                        </Fragment> :
                        <Fragment>{this.props.children}</Fragment>
                }

            </div>
        )
    }
}

export default Logout