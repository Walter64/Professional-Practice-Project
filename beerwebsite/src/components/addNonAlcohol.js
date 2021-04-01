import React from 'react';
import axios from 'axios';

export class AddNonAlcohol extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangebeerTypeAl = this.onChangebeerTypeAl.bind(this);
        this.onChangebeerPercentAl = this.onChangebeerPercentAl.bind(this);
        this.onChangebeerQtyAl = this.onChangebeerQtyAl.bind(this);
        this.onChangeflagAl = this.onChangeflagAl.bind(this);
        this.onChangebeerPriceAl = this.onChangebeerPriceAl.bind(this);
        this.onChangebeerImageAl = this.onChangebeerImageAl.bind(this);

        this.state = {
            beerTypeAl: '',
            beerPercentAl: '',
            beerQtyAl: '',
            flagAl: '',
            beerPriceAl: '',
            beerImageAl: ''
        }
    }

    onChangebeerTypeAl(e) {
        this.setState({
            beerTypeAl: e.target.value
        });
    }
    onChangebeerPercentAl(e) {
        this.setState({
            beerPercentAl: e.target.value
        });
    }
    onChangebeerQtyAl(e) {
        this.setState({
            beerQtyAl: e.target.value
        });
    }
    onChangeflagAl(e) {
        this.setState({
            flagAl: e.target.value
        });
    }
    onChangebeerPriceAl(e) {
        this.setState({
            beerPriceAl: e.target.value
        });
    }
    onChangebeerImageAl(e) {
        this.setState({
            beerImageAl: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Beer: " + this.state.beerTypeAl + " " + this.state.beerPercentAl + " " + this.state.beerQtyAl + " " + this.state.flagAl + " " + this.state.beerPriceAl);

        const newBeerAl = {
            beerTypeAl: this.state.beerTypeAl,
            beerPercentAl: this.state.beerPercentAl,
            beerQtyAl: this.state.beerQtyAl,
            flagAl: this.state.flagAl,
            beerPriceAl: this.state.beerPriceAl,
            beerImageAl: this.state.beerImageAl
        }

        axios.post('http://localhost:4000/addNonAlcohol', newBeerAl)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });

    } // end onSubmit

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
                            value={this.state.beerTypeAl}
                            onChange={this.onChangebeerTypeAl}></input>
                    </div>

                    <div className="Form Group">
                        <label>Beer Percent</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.beerPercentAl}
                            onChange={this.onChangebeerPercentAl}></input>
                    </div>

                    <div className="Form Group">
                        <label>Beer Qty </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.beerQtyAl}
                            onChange={this.onChangebeerQtyAl}>
                        </textarea>
                    </div>

                    <div className="Form Group">
                        <label>Flag </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.flagAl}
                            onChange={this.onChangeflagAl}>
                        </textarea>
                    </div>

                    <div className="Form Group">
                        <label>Beer Price </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.beerPriceAl}
                            onChange={this.onChangebeerPriceAl}>
                        </textarea>
                    </div>

                    <div className="Form Group">
                        <label>Beer Image </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.beerImageAl}
                            onChange={this.onChangebeerImageAl}>
                        </textarea>
                    </div>

                    <div className="Form-Group">
                        <input type='submit'
                            value='Add Beer'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>

        ); // end return

    } // end render()

} // end AddNonAlcohol class