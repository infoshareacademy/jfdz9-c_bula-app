import React, { Component, Fragment } from 'react';
import './signIn.css';

class SignIn extends Component {
    state = {
        value: '',
    };

    render() {
        return <Fragment>
            <form>
                <label>
                    <input type="text" name="name" className="signIn" placeholder="nazwa sklepu" />
                </label>
                <button class="button" type="submit" value="Wyszukaj">Wyszukaj</button>
            </form>
        </Fragment>
    }
}

export default SignIn;