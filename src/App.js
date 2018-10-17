import React, {Component, Fragment} from 'react';
import List from './List'
import Search from './Search/index'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CheckboxesGroup from "./Sidebar/CheckboxesGroup";
import ControlledOpenSelect from "./Sidebar/ControlledOpenSelect";
import SignUp from "./Auth/signUp";
import SignIn from "./Auth/signIn";
import Auth from "./Auth/auth";
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
                                <Route path="/SignIn" component={SignIn}/>
                                <Route path="/SignUp" component={SignUp}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper><Search onFormSubmit={this.onFormSubmit}/></Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper>
                                    <CheckboxesGroup categories={this.state.categories} setCategoryIds={this.setCategoryIds}/>
                                    <ControlledOpenSelect onChange={this.onSelectedDistrict} district={this.state.district}/>
                                </Paper>
                            </Grid>
                            <Grid item xs={8}>
                                <Auth>
                                <Paper><List shops={this.state.shops} postalCode={this.state.postalCode} selectedCategoryIds={this.state.categoryIds} district={this.state.selectedDistrict}/></Paper>
                                </Auth>
                                <Route path="/dashboard" component={Dashboard}/>
                            </Grid>
                        </Grid>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default App;
