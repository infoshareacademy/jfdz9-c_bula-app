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
                    <input type="text" name="name" className="signIn" placeholder="nazwa sklepu"style={{marginLeft:380}} />
                </label>
                <button class="button" type="submit" value="Wyszukaj">Dodaj</button>
                </p>
                <p>
                <label>
                    <input type="text" name="name" className="signIn" placeholder="ulica" style={{marginLeft:380}}/>
                </label>
                <button className="button" type="submit" value="Wyszukaj">Dodaj</button>
                </p>
                <p>
                    <label>
                    <input type="text" name="name" className="signIn" placeholder="kod pocztowy" style={{marginLeft:380}}/>
                </label>
                <button className="button" type="submit" value="Wyszukaj">Dodaj</button>
                </p>
                <p>
                    <label>
                        <input type="text" name="name" className="signIn" placeholder="logo sklepu" style={{marginLeft:380}}/>
                    </label>
                    <button className="button" type="submit" value="Wyszukaj">Załaduj</button>
                </p>
            </form>
        </Fragment>
    }
}

export default SignIn2;