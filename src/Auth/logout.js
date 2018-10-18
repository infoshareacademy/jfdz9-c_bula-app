import React, { Component, Fragment } from 'react'
import Button from "@material-ui/core/es/Button/Button";
import firebase from 'firebase'

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
                            {' '}
                            <Button color="inherit" onClick={() => firebase.auth().signOut()}>
                                Wyloguj
                            </Button>
                        </Fragment> :
                        <Fragment>
                            {this.props.children}
                        </Fragment>
                }

            </div>
        )
    }
}

export default Logout