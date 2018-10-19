import React, { Component, Fragment } from 'react'
import firebase from 'firebase'
import IsAdmin from "../Auth/isAdmin";

class AdminPanel extends Component {

    state = {
        users: [],
        checkUser: null
    };
    componentDidMount() {
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
                    console.log(id)
                    if (user.id === id) {
                        firebase.database().ref(`/users/${id}/`).set({
                            shopkeeper: !user.shopkeeper
                        })
                        console.log(id)
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
               console.log(this.state.users);
            })
        };





    render() {
        return (
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
            </IsAdmin>
        )
    }
}

export default AdminPanel