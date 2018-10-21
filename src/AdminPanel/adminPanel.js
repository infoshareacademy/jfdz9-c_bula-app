import React, { Component, Fragment } from 'react'
import firebase from 'firebase'
import IsAdmin from "../Auth/isAdmin";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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

        description: '',

        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSf9gUebYustjZYe_3Rnik9ZU_QE0Xkz2YElmzttqhB3trzUaC',

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

    handleChangeCath = categoryId => event => {
        this.setState({
            cathegory: this.state.cathegory.includes(categoryId) ?
                this.state.cathegory.filter(id => id !== categoryId) :
                this.state.cathegory.concat(categoryId)
        }, () => {

        });
    };
    handleShopSubmit = event => {
        event.preventDefault();
        firebase.database().ref(`/shops/${this.state.shopId}`).set({
            description: this.state.description,
            name: this.state.name,
            category_id:this.state.cathegory,
            image:this.state.image,
            sid:this.state.shopId
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
            district: '',
        })
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
                    <h2>Dodaj sklep:</h2>
                    <p>Dzielnica:</p>
                    <p></p>
                    <input name="district" value={this.state.district} onChange={this.handleChange}/>
                    <p>Kod pocztowy:</p>
                    <input name="postalCode" value={this.state.postalCode} onChange={this.handleChange}/>
                    <p>Ulica:</p>
                    <input name="street" value={this.state.street} onChange={this.handleChange}/>
                    <p>Nazwa:</p>
                    <input name="name" value={this.state.name} onChange={this.handleChange}/>
                    <p>Opis:</p>
                    <input name="description" value={this.state.description} onChange={this.handleChange}/>
                    <p>Kategorie:</p>
                    {
                        this.state.categories.map(
                            category => (
                                <FormControlLabel
                                    key={category.id}
                                    control={
                                        <Checkbox checked={this.state.cathegory.includes(category.id)}
                                                  onChange={this.handleChangeCath(category.id)}
                                                  value={category.id.toString()} />
                                    }
                                    label={category.name}

                                />
                            )
                        )
                    }
                    <h2>Godziny otwarcia:</h2>
                    <p>Sobota</p>
                    <select name={"saturday_open"} onChange={this.handleChange}>
                        {
                            this.state.time.map(
                                cathy => (
                                    <option value={cathy.id}>{cathy.id}</option>
                                )
                            )
                        }
                    </select>
                    <select name={"saturday_close"} onChange={this.handleChange}>
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
                        {
                            this.state.time.map(
                                cathy => (
                                    <option value={cathy.id}>{cathy.id}</option>
                                )
                            )
                        }
                    </select>
                    <select name={"sunday_close"} onChange={this.handleChange}>
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
                        {
                            this.state.time.map(
                                cathy => (
                                    <option value={cathy.id}>{cathy.id}</option>
                                )
                            )
                        }
                    </select>
                    <select name={"weekday_close"} onChange={this.handleChange}>
                        {
                            this.state.time.map(
                                cathy => (
                                    <option value={cathy.id}>{cathy.id}</option>
                                )
                            )
                        }
                    </select>
                    <button>Dodaj</button>
                </form>
            </IsAdmin>
            </Fragment>
        )
    }
}

export default AdminPanel