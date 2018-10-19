import React, {Component, Fragment} from 'react';
import List from '../List/index.js'
import Search from '../Search'
import Grid from '@material-ui/core/Grid';
import CheckboxesGroup from "../Sidebar/CheckboxesGroup";
import ControlledOpenSelect from "../Sidebar/ControlledOpenSelect";
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import Background from '../Search/backgroundImage.jpg';
import Nav from '../Nav';
import firebase from 'firebase';

const styleInputPostal = {
    backgroundImage: `url(${ Background })`,
    paddingTop: '110px',
    paddingBottom: '110px'
};

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
                <Router>
                    <div>
                        <Grid container spacing={0}>
                            <Grid style={styleInputPostal} item xs={12}>
                                <Search onFormSubmit={this.onFormSubmit}/>
                            </Grid>
                            <Grid item xs={4}>
                                <CheckboxesGroup categories={this.state.categories}
                                                 setCategoryIds={this.setCategoryIds}/>
                                <ControlledOpenSelect onChange={this.onSelectedDistrict}
                                                      district={this.state.district}/>
                            </Grid>
                            <Grid item xs={8}>
                                <List shops={this.state.shops} postalCode={this.state.postalCode}
                                      selectedCategoryIds={this.state.categoryIds}
                                      district={this.state.selectedDistrict}/>
                            </Grid>
                        </Grid>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default Home;
