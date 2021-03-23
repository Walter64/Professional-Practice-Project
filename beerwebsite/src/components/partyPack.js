import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import chang from '../images/chang1.jpg';
import pack1 from '../images/pack1.jpg';
import pack2 from '../images/pack2.jpg';
import pack3 from '../images/pack3.jpg';
import pack4 from '../images/pack4.jpg';
import pack5 from '../images/pack5.jpg';
import pack6 from '../images/pack6.jpg';
import world from '../images/gardenGlobe.jpg';

export class partyPack extends React.Component {
    render() {
        return (

            <div>
                <ul class="breadcrumb">
                    <li><a href="/">Home </a></li>
                    <li>Party Pack</li>
                </ul>
                {/* Card 1 */}
                <Card id="crd1" border="dark" style={{ width: '25rem', height: '43rem' }} >

                    <Card.Body>
                        <Card.Text>
                            <img id="bottle" src={pack1} width="300" height="320" alt="Chang Beer"></img>
                        </Card.Text>
                        <Card.Text>
                        </Card.Text>
                        <div id="flexBox">
                            <div1 id="box1">
                                4 Different Breweries
                                </div1>
                            <div2 id="box2">4 Styles</div2>
                            <img src={world} width="65" height="45" alt="Chang Beer"></img>
                        </div>
                        <br></br>
                        <h5>IPA Party Pack (4 different breweries)</h5>
                        <br></br>
                        <p>€44.99</p>
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
                            <img id="bottle" src={pack2} width="300" height="320" alt="Chang Beer"></img>
                        </Card.Text>
                        <Card.Text>
                        </Card.Text>
                        <div id="flexBox">
                            <div1 id="box1">
                            2 Different Breweries
                            </div1>
                            <div2 id="box2">2 Styles</div2>
                            <img src={world} width="65" height="45" alt="Chang Beer"></img>
                        </div>
                        <br></br>
                        <h5>Asian Beer Variety Party Pack</h5>
                        <br></br>
                        <p>€34.99</p>
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
                            <img id="bottle" src={pack3} width="300" height="320" alt="Chang Beer"></img>
                        </Card.Text>
                        <Card.Text>
                        </Card.Text>
                        <div id="flexBox">
                            <div1 id="box1">
                             3 Different Breweries
                            </div1>
                            <div2 id="box2">3 Styles</div2>
                            <img src={world} width="65" height="45" alt="Chang Beer"></img>
                        </div>
                        <br></br>
                        <h5>American Beer Brew Party Pack</h5>
                        <br></br>
                        <p>€14.99</p>
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
                                <img id="bottle" src={pack4} width="300" height="320" alt="Chang Beer"></img>
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>
                            <div id="flexBox">
                                <div1 id="box1">
                                2 Different Breweries
                                </div1>
                                <div2 id="box2">1 Style</div2>
                                <img src={world} width="65" height="45" alt="Chang Beer"></img>
                            </div>
                            <br></br>
                            <h5>Hawthorn Party Pack</h5>
                            <br></br>
                            <p>€9.99</p>
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
                                <img id="bottle" src={pack5} width="300" height="320" alt="Chang Beer"></img>
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>
                            <div id="flexBox">
                                <div1 id="box1">
                                    3 Different Breweries
                                </div1>
                                <div2 id="box2">3 styles</div2>
                                <img src={world} width="65" height="45" alt="Chang Beer"></img>
                            </div>
                            <br></br>
                            <h5>Hawk Lager Party Pack</h5>
                            <br></br>
                            <p>€17.99</p>
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
                                <img id="bottle" src={pack6} width="300" height="320" alt="Chang Beer"></img>
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>
                            <div id="flexBox">
                                <div1 id="box1">
                                7 Different Breweries
                                </div1>
                                <div2 id="box2">7 Styles</div2>
                                <img src={world} width="65" height="45" alt="Chang Beer"></img>
                            </div>
                            <br></br>
                            <h5>Wild Card Party Pack</h5>
                            <br></br>
                            <p>€29.99</p>
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
