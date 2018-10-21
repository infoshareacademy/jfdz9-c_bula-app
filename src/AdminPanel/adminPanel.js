import React, {Component, Fragment} from 'react'
import firebase from 'firebase'
import IsAdmin from "../Auth/isAdmin";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    root: {
        display: 'flex',
        color: '#C6596F',
        '&$checked': {
            color: '#C6596F',
        },
    },
    checked: {},
    formControl: {
        margin: theme.spacing.unit,
    },
});

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
                    ([id, value]) => ({id, ...value})
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

    handleChangeChk = id => {
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
            category_id: this.state.cathegory,
            image: this.state.image,
            sid: this.state.shopId
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
        const {classes} = this.props;
        return (
            <Fragment>
                <IsAdmin>
                    <div>
                        <ul>
                            {
                                this.state.users.map(
                                    users => (
                                        <p key={users.id}>
                                            Email: <strong>{users.email} </strong> Admin: <input type="checkbox"
                                                                                                 defaultChecked={users.shopkeeper}
                                                                                                 onChange={() => this.handleChangeChk(users.id)}/>
                                        </p>
                                    )
                                )
                            }
                        </ul>
                    </div>
                    <div className={classes.root}>
                        <form onSubmit={this.handleShopSubmit} style={{textAlign: 'center'}}>
                            <h1>Dodaj sklep:</h1>
                            <h3>Dzielnica:</h3>
                            <input className="inputForm" name="district" value={this.state.district}
                                   onChange={this.handleChange}/>
                            <h3>Kod pocztowy:</h3>
                            <input className="inputForm" name="postalCode" value={this.state.postalCode}
                                   onChange={this.handleChange}/>
                            <h3>Ulica:</h3>
                            <input className="inputForm" name="street" value={this.state.street}
                                   onChange={this.handleChange}/>
                            <h3>Nazwa:</h3>
                            <input className="inputForm" name="name" value={this.state.name}
                                   onChange={this.handleChange}/>
                            <h3>Opis:</h3>
                            <input className="inputForm" name="description" value={this.state.description}
                                   onChange={this.handleChange}/>
                            <h1>Kategorie:</h1>
                            {
                                this.state.categories.map(
                                    category => (
                                        <FormControlLabel
                                            key={category.id}
                                            control={
                                                <Checkbox checked={this.state.cathegory.includes(category.id)}
                                                          onChange={this.handleChangeCath(category.id)}
                                                          value={category.id.toString()}
                                                          classes={{
                                                              root: classes.root,
                                                              checked: classes.checked,
                                                          }}
                                                />
                                            }
                                            label={category.name}

                                        />
                                    )
                                )
                            }
                            <h1>Godziny otwarcia:</h1>
                            <h3>Sobota</h3>
                            <select className="inputFormRejestr" name={"saturday_open"} onChange={this.handleChange}>
                                {
                                    this.state.time.map(
                                        cathy => (
                                            <option value={cathy.id}>{cathy.id}</option>
                                        )
                                    )
                                }
                            </select>
                            <select className="inputFormRejestr" name={"saturday_close"} onChange={this.handleChange}>
                                {
                                    this.state.time.map(
                                        cathy => (
                                            <option value={cathy.id}>{cathy.id}</option>
                                        )
                                    )
                                }
                            </select>
                            <h3>Niedziela</h3>
                            <select className="inputFormRejestr" name={"sunday_open"} onChange={this.handleChange}>
                                {
                                    this.state.time.map(
                                        cathy => (
                                            <option value={cathy.id}>{cathy.id}</option>
                                        )
                                    )
                                }
                            </select>
                            <select className="inputFormRejestr" name={"sunday_close"} onChange={this.handleChange}>
                                {
                                    this.state.time.map(
                                        cathy => (
                                            <option value={cathy.id}>{cathy.id}</option>
                                        )
                                    )
                                }
                            </select>
                            <h3>Tydzien</h3>
                            <select className="inputFormRejestr" name={"weekday_open"} onChange={this.handleChange}>
                                {
                                    this.state.time.map(
                                        cathy => (
                                            <option value={cathy.id}>{cathy.id}</option>
                                        )
                                    )
                                }
                            </select>
                            <select className="inputFormRejestr" name={"weekday_close"} onChange={this.handleChange}>
                                {
                                    this.state.time.map(
                                        cathy => (
                                            <option value={cathy.id}>{cathy.id}</option>
                                        )
                                    )
                                }
                            </select>
                            <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0 50px 0'}}>
                                <button className="buttonFormSideBar">Dodaj</button>
                            </div>
                        </form>
                    </div>
                </IsAdmin>
            </Fragment>
        )
    }
}

export default withStyles(styles)(AdminPanel);