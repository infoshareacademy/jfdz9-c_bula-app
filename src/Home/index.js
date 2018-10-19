import React, {Component, Fragment} from 'react';
import List from '../List/index.js'
import Search from '../Search'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CheckboxesGroup from "../Sidebar/CheckboxesGroup";
import ControlledOpenSelect from "../Sidebar/ControlledOpenSelect";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Nav from '../Nav';


class Home extends Component {

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
                                <Search onFormSubmit={this.onFormSubmit}/>
                            </Grid>
                            <Grid item xs={2}>
                            <ControlledOpenSelect onChange={this.onSelectedDistrict} district={this.state.district}/>
                            </Grid>
                            <Grid item xs={4}>
                                <CheckboxesGroup categories={this.state.categories} setCategoryIds={this.setCategoryIds}/>
                            </Grid>
                            <Grid item xs={6}>
                                <List shops={this.state.shops} postalCode={this.state.postalCode} selectedCategoryIds={this.state.categoryIds} district={this.state.selectedDistrict}/>
                            </Grid>
                        </Grid>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default Home;
