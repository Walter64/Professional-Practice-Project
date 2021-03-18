import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import chang from '../images/chang1.jpg';
import world from '../images/gardenGlobe.jpg';

export class partyPack extends React.Component {
    render() {
        return (

            <div>
                <ul class="breadcrumb">
                    <li><a href="/">Home </a></li>
                    <li>Party Pack</li>
                </ul>
                <center>
                    <Card border="dark" style={{ width: '25rem', height: '43rem' }} >

                        <Card.Body>
                            <Card.Text>
                                <img id="bottle" src={chang} width="300" height="320" alt="Chang Beer"></img>
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>
                            <div id="flexBox">
                                <div1 id="box1">
                                    5.2%
                                </div1>
                                <div2 id="box2">330ml</div2>
                                <img src={world} width="65" height="45" alt="Chang Beer"></img>
                            </div>
                            <br></br>
                            <h5>Chang Beer</h5>
                            <br></br>
                            <p>€24.99</p>
                            <label id="qty">Quantity</label>
                            <input type="number" id='qty' placeholder="0" size="50"></input>

                            <br></br>
                            <Button id="qtyBtn" variant="danger">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </center>
            </div>
        );
    }
}
