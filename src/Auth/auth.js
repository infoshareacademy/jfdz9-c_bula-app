import React, { Component, Fragment } from 'react'
import firebase from 'firebase'

class Auth extends Component {
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
                            {this.props.children}
                        </Fragment> :
                        <Fragment>
                            <h1>Komunikat: Jesteś niezalogowany czy coś takiego, ewentualnie odnośnik do formularza logowania/rejestracji</h1>
                        </Fragment>
                }

            </div>
        )
    }
}

export default Auth