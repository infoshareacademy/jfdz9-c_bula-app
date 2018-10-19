import firebase from 'firebase';
import React, {Component, Fragment} from 'react';
import Modal from "react-responsive-modal";
import { Redirect } from 'react-router-dom'
import Logged from "./logged";

class SignIn extends Component {

    state = {
        email: '',
        password: '',
        error: null,
        open: true,
        redirect: false
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }
    onCloseModal = () => {
        this.setState({ open: false });
        this.setState({ redirect: true });
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ error: null });
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(
            error => this.setState({ error })
        )
    };

    render() {
        const { open } = this.state;
        return (
            <Fragment>
                {this.renderRedirect()}
                <Modal open={open} onClose={this.onCloseModal} center>
                    <Logged>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Zaloguj się</h1>
                        { this.state.error && <p>{this.state.error.message} ({this.state.error.code})</p> }
                        <input name="email" value={this.state.email} onChange={this.handleChange}/>
                        <input name="password" value={this.state.password} onChange={this.handleChange}/>
                        <button>Sign in</button>
                    </form>
                    </Logged>
                </Modal>
            </Fragment>
        );
    }
}

export default SignIn