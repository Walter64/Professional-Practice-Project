import React from 'react';
import axios from 'axios';
import {World} from '../components/world';


export class worldBeers extends React.Component {
    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }



    state = {
        worldPacks: []
    };

    ReloadData() {
        axios.get('http://localhost:4000/worldBeers')
            .then((response) => {
                this.setState({worldPacks: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/worldBeers')
            .then((response) => {
                this.setState({worldPacks: response.data })
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
                        <li><a href="/partyPack">Party Pack </a></li>
                        <li>World Beers</li>
                    </ul>
                </div>
            <World id="display" worldPacks={this.state.worldPacks} ReloadData={this.ReloadData}></World>
            </div>
        );
    }
}