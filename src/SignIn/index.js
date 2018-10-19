import React, { Component, Fragment } from 'react';
import './signIn.css';

class SignIn2 extends Component {
    state = {
        value: '',
    };

    render() {
        return <Fragment>
            <form>
                <p>
                <label>
                    <input type="text" name="name" className="signIn" placeholder="nazwa sklepu" />
                </label>
                <button class="button" type="submit" value="Wyszukaj">Dodaj</button>
                </p>
                <p>
                <label>
                    <input type="text" name="name" className="signIn" placeholder="ulica"/>
                </label>
                <button className="button" type="submit" value="Wyszukaj">Dodaj</button>
                </p>
                <p>
                    <label>
                    <input type="text" name="name" className="signIn" placeholder="kod pocztowy"/>
                </label>
                <button className="button" type="submit" value="Wyszukaj">Dodaj</button>
                </p>
                <p>
                    <label>
                        <input type="text" name="name" className="signIn" placeholder="logo sklepu"/>
                    </label>
                    <button className="button" type="submit" value="Wyszukaj">Załaduj</button>
                </p>
            </form>
        </Fragment>
    }
}

export default SignIn2;