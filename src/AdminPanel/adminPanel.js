import React, { Component, Fragment } from 'react'
import firebase from 'firebase'
import IsAdmin from "../Auth/isAdmin";

class AdminPanel extends Component {

    state = {
        users: [],
        checkUser: null,
        categories: [],

        district: '',
        postalCode: '',
        street: '',

        cathegory: [],

        description: '',

        image: '',

        name: '',

        saturday_close: 0,
        saturday_open: 0,
        sunday_close: 0,
        sunday_open: 0,
        weekday_close: 0,
        weekday_open: 0
    };
    componentDidMount() {
        firebase.database().ref('/cathegories').on('value', snapshot => {
            this.setState({
                categories: snapshot.val(),
            })
        })
        firebase.database().ref('/users').on('value', snapshot => {
            this.setState({
                users: Object.entries(snapshot.val() || {}).map(
                    ([id, value]) => ({ id, ...value })

                )
            })
        })
    }

    handleChangeChk = id =>{
            this.setState({
                users: this.state.users.map(user => {
                    if (user.id === id) {
                        firebase.database().ref(`/users/${id}/`).set({
                            ...user,
                            shopkeeper: !user.shopkeeper
                        })
                    }
                    if (user.id === id) {
                        return {
                            ...user,
                            shopkeeper: !user.shopkeeper,
                        }
                    }
                    return user;
                })
            }, () => {
            })
        };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleShopSubmit = event => {
        event.preventDefault();
        this.setState({ error: null });
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
            data => {
                firebase.database().ref(`/users/${data.user.uid}`).set({
                    shopkeeper: false,
                    favs: [],
                    email: this.state.email
                })
            }).catch(
            error => this.setState({ error })
        )
    };





    render() {
        return (
            <Fragment>
            <IsAdmin>
            <div>
                <ul>
                    {
                        this.state.users.map(
                            users => (
                                <p key={users.id}>
                                    Email: <strong>{users.email} </strong> Admin: <input type="checkbox" defaultChecked={users.shopkeeper} onChange={() => this.handleChangeChk(users.id)}/>
                                </p>
                            )
                        )
                    }
                </ul>
            </div>
                <form onSubmit={this.handleShopSubmit}>
                    <p>adres:</p>
                    <input name="disctrict:" value={this.state.district} onChange={this.handleChange}/>
                    <input name="Kod pocztowy:" value={this.state.postalCode} onChange={this.handleChange}/>
                    <input name="Ulica: " value={this.state.street} onChange={this.handleChange}/>
                    <p>o sklepie:</p>
                    <input name="Nazwa: " value={this.state.name} onChange={this.handleChange}/>
                    <input name="Opis: " value={this.state.description} onChange={this.handleChange}/>
                    <p>Kategorie:</p>
                    <select onChange={this.handleChange}>
                        {
                            this.state.categories.map(
                                cathy =>(
                                    <option value={cathy.id}>{cathy.name}</option>
                                )
                            )
                        }
                        {console.log(this.state.name)}
                    </select>
                    <p>Godziny otwarcia:</p>

                    <p>Logo:</p>

                    <button>Dodaj</button>
                </form>
            </IsAdmin>
            </Fragment>
        )
    }
}

export default AdminPanel