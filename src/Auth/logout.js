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
            <div>
                {
                    this.state.user ?
                        <Fragment>
                            {this.state.user.email}
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