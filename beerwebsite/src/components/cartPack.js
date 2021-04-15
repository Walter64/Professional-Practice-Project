import React from 'react';
import {CartItem} from '../components/cartItem';

export class CartPack extends React.Component{
    render(){
        
        return this.props.cart.map((items)=>{
            console.log(items._id)
            return<CartItem key={items._id} items={items} ReloadData={this.props.ReloadData}></CartItem>

        })
    }
}