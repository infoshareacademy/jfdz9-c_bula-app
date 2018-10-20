import React, { Component, Fragment } from 'react'
import firebase from 'firebase'
import IsAdmin from "../Auth/isAdmin";

class AdminPanel extends Component {

    state = {
        shopId: 0,

        users: [],
        time: [],
        checkUser: null,
        categories: [],

        district: '',
        postalCode: '',
        street: '',

        cathegory: [],
        caths: 1,

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
        firebase.database().ref('/shops').on('value', snapshot => {
            this.setState({
                shopId: snapshot.val().length,
            })
        })
        firebase.database().ref('/hours').on('value', snapshot => {
            this.setState({
                time: snapshot.val(),
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

    handleChangeDrop = (id, ...event) => {
        const newItems = [...this.state.cathegory];
        newItems[id] = event.target.value;
        this.setState({
            [event.target.name]: newItems
        })
    };

    handleCaths = event =>{
        event.preventDefault();
        this.setState({
            caths: this.state.caths+1,
        })
    }


    handleShopSubmit = event => {
        event.preventDefault();
        firebase.database().ref(`/shops/${this.state.shopId}`).set({
            description: this.state.description,
            name: this.state.name,
        });
        firebase.database().ref(`/shops/${this.state.shopId}/address`).set({
            district: this.state.district,
            postalCode: this.state.postalCode,
            street: this.state.street,
        });
        firebase.database().ref(`/shops/${this.state.shopId}/openingHours`).set({
            saturday_close: this.state.saturday_close,
            saturday_open: this.state.saturday_open,
            sunday_close: this.state.sunday_close,
            sunday_open: this.state.sunday_open,
            weekday_close: this.state.weekday_close,
            weekday_open: this.state.weekday_open,
        });
        this.setState
        ({
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
            weekday_open: 0,
            caths: 1,
        })
    };





    render() {
        const cathRange = Array.from({ length: this.state.caths })
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
                    <input name="district" value={this.state.district} onChange={this.handleChange}/>
                    <input name="postalCode" value={this.state.postalCode} onChange={this.handleChange}/>
                    <input name="street" value={this.state.street} onChange={this.handleChange}/>
                    <p>o sklepie:</p>
                    <input name="name" value={this.state.name} onChange={this.handleChange}/>
                    <input name="description" value={this.state.description} onChange={this.handleChange}/>
                    <p>Kategorie:</p>

                        <select name={"cathegory"} onChange={() => this.handleChangeDrop(0)}>
                        {
                            this.state.categories.map(
                                cathy => (
                                    <option value={cathy.id}>{cathy.name}</option>
                                )
                            )
                        }
                        {console.log(this.state.cathegory)}
                        {console.log(this.state.caths)}
                        </select>
                        <select name={"cathegory"} onChange={() => this.handleChangeDrop(1)}>
                            {
                                this.state.categories.map(
                                    cathy => (
                                        <option value={cathy.id}>{cathy.name}</option>
                                    )
                                )
                            }
                        </select>
                    <button onClick={this.handleCaths}>+</button>

                    <p>Godziny otwarcia:</p>

                    <p>Sobota</p>
                    <select name={"saturday_open"} onChange={this.handleChange}>
                        {console.log(this.state.time)}
                        {
                            this.state.time.map(
                                cathy => (
                                    <option value={cathy.id}>{cathy.id}</option>
                                )
                            )
                        }
                    </select>
                    <select name={"saturday_close"} onChange={this.handleChange}>
                        {console.log(this.state.time)}
                        {
                            this.state.time.map(
                                cathy => (
                                    <option value={cathy.id}>{cathy.id}</option>
                                )
                            )
                        }
                    </select>
                    <p>Niedziela</p>
                    <select name={"sunday_open"} onChange={this.handleChange}>
                        {console.log(this.state.time)}
                        {
                            this.state.time.map(
                                cathy => (
                                    <option value={cathy.id}>{cathy.id}</option>
                                )
                            )
                        }
                    </select>
                    <select name={"sunday_close"} onChange={this.handleChange}>
                        {console.log(this.state.time)}
                        {
                            this.state.time.map(
                                cathy => (
                                    <option value={cathy.id}>{cathy.id}</option>
                                )
                            )
                        }
                    </select>
                    <p>Tydzien</p>
                    <select name={"weekday_open"} onChange={this.handleChange}>
                        {console.log(this.state.time)}
                        {
                            this.state.time.map(
                                cathy => (
                                    <option value={cathy.id}>{cathy.id}</option>
                                )
                            )
                        }
                    </select>
                    <select name={"weekday_close"} onChange={this.handleChange}>
                        {console.log(this.state.time)}
                        {
                            this.state.time.map(
                                cathy => (
                                    <option value={cathy.id}>{cathy.id}</option>
                                )
                            )
                        }
                    </select>

                    <p>Logo:</p>

                    <button>Dodaj</button>
                </form>
            </IsAdmin>
            </Fragment>
        )
    }
}

export default AdminPanel