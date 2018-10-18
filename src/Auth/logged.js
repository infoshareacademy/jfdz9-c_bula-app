import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom';
import firebase from 'firebase'

class Logged extends Component {
    state = {
        user: null,
        redirect: false,
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }


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
                {this.renderRedirect()}
                {
                    this.state.user ?
                        <Fragment>
                            <h1>Zalogowano</h1>
                            {setTimeout(this.setState({ redirect: true }),2000)}
                        </Fragment> :
                        <Fragment>
                            {this.props.children}
                        </Fragment>
                }

            </div>
        )
    }
}

export default Logged