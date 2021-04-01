import React from 'react';
import axios from 'axios';
import {NonAlco} from '../components/nonAlco';

export class nonAlcoholic extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        packs: []
    };

    ReloadData() {
        axios.get('http://localhost:4000/nonAlcoholic')
            .then((response) => {
                this.setState({ packs: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/nonAlcoholic')
            .then((response) => {
                this.setState({ packs: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }
    render() {
        return (

            <div id="packDiv">
                <div>
                    <ul class="breadcrumb">
                        <li><a href="/">Home </a></li>
                        <li>Party Pack</li>
                    </ul>
                </div>
                <NonAlco id="display" packs={this.state.packs} ReloadData={this.ReloadData}></NonAlco>                
            </div>
        );
    }

} // end NonAlcoholic class