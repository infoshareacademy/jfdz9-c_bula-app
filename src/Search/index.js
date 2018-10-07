import React, { Component, Fragment } from 'react';

// const styles = themes => ({
//     searchInput: {
//         height: 500,
//         width: 200,
//     }
//
//
// });



class Search extends Component {
    state = {
        value: '',
    };

    onChange = event => {
        this.setState({
            value: event.target.value,
        });
    };

    onFormSubmit = event => {
        event.preventDefault();
      // console.log(event, 'klik')

        this.props.onFormSubmit(this.state.value)
    };

    render() {
        const { classes } = this.props;


        return <Fragment>
            <form onSubmit={this.onFormSubmit}>
                <label>

                    <input type="text" name="name" className="searchInput" onChange={this.onChange} value={this.state.value}/>

                </label>
                <input type="submit" value="Wyszukaj" />
            </form>


        </Fragment>
    }
}

export default Search