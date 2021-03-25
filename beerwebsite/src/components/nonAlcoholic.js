import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import card1 from '../images/weihenstrpkristall.jpg';
import card2 from '../images/heineken00.jpg';
import card3 from '../images/adnamsGS.jpg';
import card4 from '../images/peroni.jpg';
import card5 from '../images/stellaartois.jpg';
import card6 from '../images/guinness.jpg';

import cardflag1 from '../images/german.png';
import cardflag2 from '../images/dutch.jpg';
import cardflag3 from '../images/unitedkingdom.jpg';
import cardflag4 from '../images/italian.jpg';
import cardflag5 from '../images/belgian.jpg';
import cardflag6 from '../images/ireland.jpg';

export class nonAlcoholic extends React.Component {
    render() {
        return (

            <div>
                <ul class="breadcrumb">
                    <li><a href="/">Home </a></li>
                    <li><a href="/partyPack">Party Pack </a></li>
                    <li><a href="/worldBeers">World Beers </a></li>
                    <li><a href="/bestSellers">Best Sellers </a></li>
                    <li><a href="/nonAlcoholic">Non-Alcoholic </a></li>
                </ul>

                <Card id="crd1" border="dark" style={{ width: '25rem', height: '43rem' }} >
                    <Card.Body>
                        <Card.Text>
                            <img id="bottle" src={card1} width="300" height="320" alt="German Beer"></img>
                        </Card.Text>
                        <Card.Text>
                        </Card.Text>
                        <div id="flexBox">
                            <div1 id="box1">
                                0.5%
                                </div1>
                            <div2 id="box2">12 x 500ml</div2>
                            <img src={cardflag1} width="65" height="45" alt="German Flag"></img>
                        </div>
                        <br></br>
                        <h5>Weihenstephaner Non-Alcoholic Beer</h5>
                        <br></br>
                        <p>€24.99</p>
                        <label id="qty">Quantity</label>
                        <input type="number" id='qty' placeholder="0" size="50"></input>
                        <br></br>
                        <Button id="qtyBtn" variant="danger">Add To Cart</Button>
                    </Card.Body>
                </Card>

                {/* Card 2 */}
                <Card id="crd2" border="dark" style={{ width: '25rem', height: '43rem' }} >
                    <Card.Body>
                        <Card.Text>
                            <img id="bottle" src={card2} width="300" height="320" alt="Heineken Beer"></img>
                        </Card.Text>
                        <Card.Text>
                        </Card.Text>
                        <div id="flexBox">
                            <div1 id="box1">
                                0.0%
                            </div1>
                            <div2 id="box2">6 x 330ml</div2>
                            <img src={cardflag2} width="65" height="45" alt="Danish Flag"></img>
                        </div>
                        <br></br>
                        <h5>Zero Alcohol Only 69 Calories </h5>
                        <br></br>
                        <p>€14.99</p>
                        <label id="qty">Quantity</label>
                        <input type="number" id='qty' placeholder="0" size="50"></input>
                        <br></br>
                        <Button id="qtyBtn" variant="danger">Add To Cart</Button>
                    </Card.Body>
                </Card>

                {/* Card 3 */}
                <Card id="crd3" border="dark" style={{ width: '25rem', height: '43rem' }} >
                    <Card.Body>
                        <Card.Text>
                            <img id="bottle" src={card3} width="300" height="320" alt="UK Beers"></img>
                        </Card.Text>
                        <Card.Text>
                        </Card.Text>
                        <div id="flexBox">
                            <div1 id="box1">
                                0.5%
                            </div1>
                            <div2 id="box2">12 x 500ml</div2>
                            <img src={cardflag3} width="65" height="45" alt="UK Flag"></img>
                        </div>
                        <br></br>
                        <h5>Adnams Alcohol Free Citrus Pale Ale</h5>
                        <br></br>
                        <p>€23.99</p>
                        <label id="qty">Quantity</label>
                        <input type="number" id='qty' placeholder="0" size="50"></input>
                        <br></br>
                        <Button id="qtyBtn" variant="danger">Add To Cart</Button>
                    </Card.Body>
                </Card>

                <div>
                    <br></br>
                    {/* Card 4 */}
                    <Card id="crd4" border="dark" style={{ width: '25rem', height: '43rem' }} >
                        <Card.Body>
                            <Card.Text>
                                <img id="bottle" src={card4} width="300" height="320" alt="Peroni Beer"></img>
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>
                            <div id="flexBox">
                                <div1 id="box1">
                                    0.0%
                                </div1>
                                <div2 id="box2">24 x 330ml</div2>
                                <img src={cardflag4} width="65" height="45" alt="Italian Flag"></img>
                            </div>
                            <br></br>
                            <h5>Peroni Libera Alcohol Free</h5>
                            <br></br>
                            <p>€24.99</p>
                            <label id="qty">Quantity</label>
                            <input type="number" id='qty' placeholder="0" size="50"></input>
                            <br></br>
                            <Button id="qtyBtn" variant="danger">Add To Cart</Button>
                        </Card.Body>
                    </Card>

                    {/* Card 5*/}
                    <Card id="crd5" border="dark" style={{ width: '25rem', height: '43rem' }} >
                        <Card.Body>
                            <Card.Text>
                                <img id="bottle" src={card5} width="300" height="320" alt="Stella Artois Beer"></img>
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>
                            <div id="flexBox">
                                <div1 id="box1">0.0%
                                </div1>
                                <div2 id="box2">4 x 330ml</div2>
                                <img src={cardflag5} width="65" height="45" alt="Belgian Flag"></img>
                            </div>
                            <br></br>
                            <h5>Alcohol Free Premium Lager Beer</h5>
                            <br></br>
                            <p>€4.99</p>
                            <label id="qty">Quantity</label>
                            <input type="number" id='qty' placeholder="0" size="50"></input>
                            <br></br>
                            <Button id="qtyBtn" variant="danger">Add To Cart</Button>
                        </Card.Body>
                    </Card>

                    {/* Card 6*/}
                    <Card id="crd6" border="dark" style={{ width: '25rem', height: '43rem' }} >
                        <Card.Body>
                            <Card.Text>
                                <img id="bottle" src={card6} width="300" height="320" alt="Guinness Beer"></img>
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>
                            <div id="flexBox">
                                <div1 id="box1">
                                    0.0%
                                </div1>
                                <div2 id="box2">4 x 500ml</div2>
                                <img src={cardflag6} width="65" height="45" alt="Irish Flag"></img>
                            </div>
                            <br></br>
                            <h5>Guinness Draught Alcohol Free</h5>
                            <br></br>                            
                            <p>€5.29</p>
                            <label id="qty">Quantity</label>
                            <input type="number" id='qty' placeholder="0" size="50"></input>
                            <br></br>
                            <Button id="qtyBtn" variant="danger">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        );
    }
}