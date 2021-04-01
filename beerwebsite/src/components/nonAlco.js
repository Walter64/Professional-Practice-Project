import React from 'react';
import {NonAlcoItem} from '../components/nonAlcoItem';

export class NonAlco extends React.Component {

    render(){
        return this.props.packs.map((pack)=> {
            return <NonAlcoItem pack={pack} ReloadData={this.props.ReloadData}></NonAlcoItem>
        })
    }
}