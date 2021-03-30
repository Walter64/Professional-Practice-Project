import React from 'react';
import axios from 'axios';

export class Create extends React.Component {

    constructor() {

        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangebeerType = this.onChangebeerType.bind(this);
        this.onChangebeerPercent = this.onChangebeerPercent.bind(this);
        this.onChangebeerQty = this.onChangebeerQty.bind(this);
        this.onChangeflag = this.onChangeflag.bind(this);
        this.onChangebeerPrice = this.onChangebeerPrice.bind(this);
        this.onChangebeerImage = this.onChangebeerImage.bind(this);

        this.state = {
            beerType: '',
            beerPercent: '',
            beerQty: '',
            flag: '',
            beerPrice: '',
            beerImage: ''
        }

    }

    onChangebeerType(e) {
        this.setState({
            beerType: e.target.value
        });
    }
    onChangebeerPercent(e) {
        this.setState({
            beerPercent: e.target.value
        });
    }
    onChangebeerQty(e) {
        this.setState({
            beerQty: e.target.value
        });
    }
    onChangeflag(e) {
        this.setState({
            flag: e.target.value
        });
    }
    onChangebeerPrice(e) {
        this.setState({
            beerPrice: e.target.value
        });
    }
    onChangebeerPrice(e) {
        this.setState({
            beerPrice: e.target.value
        });
    }
    onChangebeerImage(e) {
        this.setState({
            beerImage: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Beer: " + this.state.beerType + " " + this.state.beerPercent + " " + this.state.beerQty + " " + this.state.flag + " " + this.state.beerPrice);
        const newBeer = {
            beerType: this.state.beerType,
            beerPercent: this.state.beerPercent,
            beerQty: this.state.beerQty,
            flag: this.state.flag,
            beerPrice: this.state.beerPrice,
            beerImage: this.state.beerImage

        }
        axios.post('http://localhost:4000/addBeers', newBeer)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            //Divs Created for various different fields encapsulated within a form
            //Contains event handlers onChange 
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="Form Group">
                        <label>Beer Type: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.beerType}
                            onChange={this.onChangebeerType}></input>
                    </div>

                    <div className="Form Group">
                        <label>Beer Percent</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.beerPercent}
                            onChange={this.onChangebeerPercent}></input>
                    </div>

                    <div className="Form Group">
                        <label>Beer Qty </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.beerQty}
                            onChange={this.onChangebeerQty}>
                        </textarea>
                    </div>

                    <div className="Form Group">
                        <label>Flag </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.flag}
                            onChange={this.onChangeflag}>
                        </textarea>
                    </div>

                    <div className="Form Group">
                        <label>Beer Price </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.beerPrice}
                            onChange={this.onChangebeerPrice}>
                        </textarea>
                    </div>

                    <div className="Form Group">
                        <label>Beer Image </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.beerImage}
                            onChange={this.onChangebeerImage}>
                        </textarea>
                    </div>

                    <div className="Form-Group">
                        <input type='submit'
                            value='Add Beer'
                            className='btn btn-primary'></input>

                    </div>
                </form>
            </div>
        );

    }
}