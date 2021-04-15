import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import{Cart} from '../components/cart';

export class CartItem extends React.Component{
    constructor(){   
        super();
        this.RemoveItem = this.RemoveItem.bind(this);
    }
    RemoveItem(e){
        e.preventDefault();
        console.log("Delete Clicked");
        axios.delete('http://localhost:4000/cart'+this.props.items._id)
        .then(() =>{
        this.props.ReloadData();
        })
        .catch();
        }
        
        render(){
            
            return( 
                <div id="cartItem">

                {/* Card 1 */}
                <Card border="dark" style={{ width: '80rem', height: '20rem' }} >
    
                    <Card.Body>
                        <br></br>
                        <h5>{this.props.items.itemName}</h5>
                        <br></br>
                        <p>€{this.props.items.totalPrice}</p>
                        <p>Qty: {this.props.items.itemQty}</p>
                        <br></br>
                        <Button id="qtyBtn" onClick={this.RemoveItem} variant="danger">Remove Item</Button>
                    </Card.Body>
                </Card>
                
            </div>
            )
        }
    }

