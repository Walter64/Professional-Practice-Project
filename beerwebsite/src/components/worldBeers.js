import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import chang from '../images/chang1.jpg';
import thailand from '../images/thailand.png';
import czech from '../images/czech.jpg';
import german from '../images/german.jpg';
import italy from '../images/italy.jpg';
import tiger from '../images/tiger.jpg';
import sing from '../images/singapore.jpg';
import garden from '../images/garden.jpg';
import bintang from '../images/star.jpg';
import bier from '../images/bier.jpg';
import lao from '../images/lao.jpg';
import laoFlag from '../images/laoFlag.jpg';

export class worldBeers extends React.Component {
    render() {
        return (
            <div>
                <ul class="breadcrumb">
                    <li><a href="/">Home </a></li>
                    <li><a href="/partyPack">Party Pack </a></li>
                    <li>World Beers</li>
                </ul>
                {/* Card 1 */}
                <Card id="crd1" border="dark" style={{ width: '25rem', height: '43rem' }} >

                    <Card.Body>
                        <Card.Text>
                            <img id="bottle" src={chang} width="300" height="320" alt="Chang Beer"></img>
                        </Card.Text>
                        <Card.Text>
                        </Card.Text>
                        <div id="flexBox">
                            <div1 id="box1">
                            5%
                        </div1>
                            <div2 id="box2">24 x 330ml</div2>
                            <img src={thailand} width="65" height="45" alt="Chang Beer"></img>
                        </div>
                        <br></br>
                        <h5>Chang Beer</h5>
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
                            <img id="bottle" src={bintang} width="300" height="320" alt="Chang Beer"></img>
                        </Card.Text>
                        <Card.Text>
                        </Card.Text>
                        <div id="flexBox">
                            <div1 id="box1">
                               8%
                            </div1>
                            <div2 id="box2">24 x 500ml</div2>
                            <img src={czech} width="65" height="45" alt="Chang Beer"></img>
                        </div>
                        <br></br>
                        <h5>Staropramen</h5>
                        <br></br>
                        <p>€39.99</p>
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
                            <img id="bottle" src={tiger} width="300" height="320" alt="Chang Beer"></img>
                        </Card.Text>
                        <Card.Text>
                        </Card.Text>
                        <div id="flexBox">
                            <div1 id="box1">
                             5%
                            </div1>
                            <div2 id="box2">24 x 500ml</div2>
                            <img src={sing} width="65" height="45" alt="Chang Beer"></img>
                        </div>
                        <br></br>
                        <h5>Tiger Beer</h5>
                        <br></br>
                        <p>€34.99</p>
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
                                <img id="bottle" src={garden} width="300" height="320" alt="Chang Beer"></img>
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>
                            <div id="flexBox">
                                <div1 id="box1">
                                7%
                                </div1>
                                <div2 id="box2">24 x 330ml</div2>
                                <img src={german} width="65" height="45" alt="Chang Beer"></img>
                            </div>
                            <br></br>
                            <h5>Hoegaarden</h5>
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
                                <img id="bottle" src={bier} width="300" height="320" alt="Chang Beer"></img>
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>
                            <div id="flexBox">
                                <div1 id="box1">
                                5%
                            </div1>
                                <div2 id="box2">24 x 330ml</div2>
                                <img src={italy} width="65" height="45" alt="Chang Beer"></img>
                            </div>
                            <br></br>
                            <h5>Birra Moretti</h5>
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
                                <img id="bottle" src={lao} width="300" height="320" alt="Chang Beer"></img>
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>
                            <div id="flexBox">
                                <div1 id="box1">
                                5%
                                </div1>
                                <div2 id="box2">24 x 330ml</div2>
                                <img src={laoFlag} width="65" height="45" alt="Chang Beer"></img>
                            </div>
                            <br></br>
                            <h5>Beer Lao</h5>
                            <br></br>
                            <p>€39.99</p>
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