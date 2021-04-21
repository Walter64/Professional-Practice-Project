import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import garden1 from '../images/garden1.jpg';
import garden2 from '../images/garden2.jpg';
import garden3 from '../images/garden3.jpg';

export class mainPage extends React.Component{
    render(){
        return(
        <div> 
            <Carousel fade id="car">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={garden1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Beers Anywhere</h3>
      <p>From all corners of the globe</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={garden3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Let The Good Times Flow</h3>
      <p>Check out our competitive rates.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={garden2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Cheers to Quality Beer</h3>
      <p>Only the best will do for us.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
        );
       
    }

}