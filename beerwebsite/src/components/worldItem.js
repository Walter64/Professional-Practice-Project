import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class WorldItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
            {/* Card 1 */}
            <Card id="crd1" border="dark" style={{ width: '25rem', height: '43rem' }} >

                <Card.Body>
                    <Card.Text>
                        <img src={this.props.world.beerImageWorld} width="300" height="320" alt="Beer Image"></img>
                    </Card.Text>
                    <Card.Text>
                    </Card.Text>
                    <div id="flexBox">
                        <div1 id="box1">
                            {this.props.world.beerPercentWorld}
                        </div1>
                        <div2 id="box2">{this.props.world.beerQtyWorld}</div2>
                        <img src={this.props.world.flagWorld} width="65" height="45" alt="Chang Beer"></img>
                    </div>
                    <br></br>
                    <h5>{this.props.world.beerTypeWorld}</h5>
                    <br></br>
                    <p>{this.props.world.beerPriceWorld}</p>
                    <label id="qty">Quantity</label>
                    <input type="number" id='qty' placeholder="0" size="50"></input>

                    <br></br>
                    <Button id="qtyBtn" variant="danger">Add To Cart</Button>
                </Card.Body>
            </Card>

        </div>
        )
    }
}