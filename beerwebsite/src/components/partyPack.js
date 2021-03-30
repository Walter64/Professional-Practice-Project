import React from 'react';
import axios from 'axios';
import { Party } from '../components/party';
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

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }



    state = {
        packs: []
    };

    ReloadData() {
        axios.get('http://localhost:4000/partyPack')
            .then((response) => {
                this.setState({ packs: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/partyPack')
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
                <Party id="display" packs={this.state.packs} ReloadData={this.ReloadData}></Party>
            </div>


        );
    }
}
