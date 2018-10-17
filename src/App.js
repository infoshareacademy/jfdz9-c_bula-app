import React, {Component, Fragment} from 'react';
import List from './List'
import Home from './Home'
import SignIn from './SignIn'
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';


class App extends Component {

    state = {
        postalCode: '',
        categories: [],
        categoryIds: [],
        district: [],
        districtIds: [],
        shops: [],
        selectedDistrict: '',
    };

    componentDidMount() {
        fetch('/data/shops.json')
            .then(response => response.json())
            .then(shops => {
                this.setState({
                    shops: shops,
                })
            });
        fetch(process.env.PUBLIC_URL + '/data/categories.json')
            .then(response => response.json())
            .then(categories => {
                this.setState({
                    categories
                })
            });
        fetch('/data/shops.json')
            .then(response => response.json())
            .then(shops => shops.map(shop => shop.address.district).reduce((uniqueDistricts, district) => uniqueDistricts.includes(district) ? uniqueDistricts : uniqueDistricts.concat(district),[]))
            .then(district => {
                this.setState({
                    district,
                })
                // console.log(this.state.district)
            });
    }

    setCategoryIds = categoryIds => {
        this.setState({
            categoryIds
        })
    };

    onFormSubmit = event => {
        this.setState({
            postalCode: event,
        })
    };

    onSelectedDistrict = (district) => {
        this.setState({
            selectedDistrict: district
        })
    };

    render() {

        return (<Fragment>
                <Router>
                    <div>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <Nav/>
                            </Grid>
                        
       
                            <Grid item xs={12}>
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/list" component={List}/>
                                <Route path="/home" component={Home}/>
                                <Route path="/signIn" component={SignIn}/>
                            </Grid>
                        </Grid>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default App;
