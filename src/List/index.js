import React, {Component, Fragment} from 'react';


class List extends Component {

    state = {
        shops: []
    };

   componentDidMount() {
       fetch('/data/shops.json')
           .then(response => response.json())
           .then(shops => {
               this.setState({
                   shops: shops,
               })
           })
};


    render() {
        return (
            <Fragment>
                <h2>a tu są listy jak na razie:</h2>

                    {this.state.shops.map(shop => {
                        return <div key={shop.id}>
                            <h4>{shop.name}</h4>
                            <p>{shop.description}</p>
                            <p>{shop.address.postalCode} {shop.address.district} {shop.address.street}</p>
                            <p>{`Pn-Pt ${shop.openingHours.weekday_open} - ${shop.openingHours.weekday_close}`} </p>
                            <p>{`Sb ${shop.openingHours.saturday_open} - ${shop.openingHours.saturday_close}`} </p>
                            <p>{`Nd ${shop.openingHours.sunday_open} - ${shop.openingHours.sunday_close}`} </p>
                        </div>
                    })}

                <div>

                </div>
            </Fragment>
    );
    }
}

export default List;
