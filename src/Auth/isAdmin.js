import React, { Component, Fragment } from 'react'
import firebase from 'firebase'

class IsAdmin extends Component {
    state = {
        user: null,
        shopkeeper: false,
        uid: null
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            user => this.setState({
                user
            }, () => this.state.user ? this.setState({uid: this.state.user.uid}) : this.setState({uid: null}))
        )

    }
    componentDidUpdate(){
        firebase.database().ref('users/'+this.state.uid+'/shopkeeper').on('value', snapshot => {
            snapshot.val() === false ? '' : snapshot.val()!==this.state.shopkeeper && this.setState({shopkeeper: snapshot.val()})
            console.log('memoryleak?')
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.shopkeeper === true ?
                        <Fragment>
                            {this.props.children}
                        </Fragment> :
                        <Fragment>
                        </Fragment>
                }

            </div>
        )
    }
}

export default IsAdmin