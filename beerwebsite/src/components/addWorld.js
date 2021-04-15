import React from 'react';
import axios from 'axios';

export class addWorld extends React.Component {

    constructor() {

        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangebeerTypeWorld = this.onChangebeerTypeWorld.bind(this);
        this.onChangebeerPercentWorld = this.onChangebeerPercentWorld.bind(this);
        this.onChangebeerQtyWorld = this.onChangebeerQtyWorld.bind(this);
        this.onChangeflagWorld = this.onChangeflagWorld.bind(this);
        this.onChangebeerPriceWorld = this.onChangebeerPriceWorld.bind(this);
        this.onChangebeerImageWorld = this.onChangebeerImageWorld.bind(this);

        this.state = {
            beerTypeWorld: '',
            beerPercentWorld: '',
            beerQtyWorld: '',
            flagWorld: '',
            beerPriceWorld: '',
            beerImageWorld: ''
        }

    }

    onChangebeerTypeWorld(e) {
        this.setState({
            beerTypeWorld: e.target.value
        });
    }
    onChangebeerPercentWorld(e) {
        this.setState({
            beerPercentWorld: e.target.value
        });
    }
    onChangebeerQtyWorld(e) {
        this.setState({
            beerQtyWorld: e.target.value
        });
    }
    onChangeflagWorld(e) {
        this.setState({
            flagWorld: e.target.value
        });
    }
    onChangebeerPriceWorld(e) {
        this.setState({
            beerPriceWorld: e.target.value
        });
    }
    onChangebeerImageWorld(e) {
        this.setState({
            beerImageWorld: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Beer: " + this.state.beerTypeWorld + " " + this.state.beerPercentWorld + " " + this.state.beerQtyWorld + " " + this.state.flagWorld + " " + this.state.beerImageWorld+ " " );
        const worldBeer = {
            beerTypeWorld: this.state.beerTypeWorld,
            beerPercentWorld: this.state.beerPercentWorld,
            beerQtyWorld: this.state.beerQtyWorld,
            flagWorld: this.state.flagWorld,
            beerPriceWorld: this.state.beerPriceWorld,
            beerImageWorld: this.state.beerImageWorld

        }
        axios.post('http://localhost:4000/addWorld', worldBeer)
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
                            value={this.state.beerTypeWorld}
                            onChange={this.onChangebeerTypeWorld}></input>
                    </div>

                    <div className="Form Group">
                        <label>Beer Percent</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.beerPercentWorld}
                            onChange={this.onChangebeerPercentWorld}></input>
                    </div>

                    <div className="Form Group">
                        <label>Beer Qty </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.beerQtyWorld}
                            onChange={this.onChangebeerQtyWorld}>
                        </textarea>
                    </div>

                    <div className="Form Group">
                        <label>Flag </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.flagWorld}
                            onChange={this.onChangeflagWorld}>
                        </textarea>
                    </div>

                    <div className="Form Group">
                        <label>Beer Price </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.beerPriceWorld}
                            onChange={this.onChangebeerPriceWorld}>
                        </textarea>
                    </div>

                    <div className="Form Group">
                        <label>Beer Image </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.beerImageWorld}
                            onChange={this.onChangebeerImageWorld}>
                        </textarea>
                    </div>

                    <div className="Form-Group">
                        <input type='submit'
                            value='Add World Beer' 
                            className='btn btn-primary'></input>

                    </div>
                </form>
            </div>
        );

    }
}