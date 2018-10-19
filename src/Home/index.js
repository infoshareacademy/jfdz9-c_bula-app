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
import firebase from 'firebase';


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

        firebase.database().ref('/shops').on('value', snapshot => {
            this.setState({
                shops: snapshot.val(),
            })
        })

        firebase.database().ref('/cathegories').on('value', snapshot => {
            this.setState({
                categories: snapshot.val(),
            })
        })

        firebase.database().ref('/shops').on('value', snapshot => {
            this.setState({
                district: (snapshot.val().map(shop => shop.address.district).reduce((uniqueDistricts, district) => uniqueDistricts.includes(district) ? uniqueDistricts : uniqueDistricts.concat(district),[])),
            })
        })
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
                {console.log(this.state.categories)}
                <Router>
                    <div>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <Nav/>
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
                                <Paper><List shops={this.state.shops} postalCode={this.state.postalCode} selectedCategoryIds={this.state.categoryIds} district={this.state.selectedDistrict}/></Paper>
                            </Grid>

                        </Grid>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default Home;
