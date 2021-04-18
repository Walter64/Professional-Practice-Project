import React from 'react';
import axios from 'axios';
import {CartPack} from '../components/cartPack';

export class Cart extends React.Component{
    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);

    }

    state = {
        cart: []
    };

    ReloadData() {
        axios.get('http://localhost:4000/cart')
            .then((response) => {
                this.setState({cart: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/cart')
            .then((response) => {
                this.setState({cart: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
        }

    render(){
        return(
        <div>
            <h3 id='cart'>Your Beer Purchases</h3>

        <CartPack id="display" cart={this.state.cart} ReloadData={this.ReloadData}></CartPack>
        </div>
        
        );
    }
    

}