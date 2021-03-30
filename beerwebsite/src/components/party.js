import React from 'react';
import {PackItem} from '../components/packItem';

export class Party extends React.Component{

    render(){
        return this.props.packs.map((pack)=> {
            return <PackItem pack={pack} ReloadData={this.props.ReloadData}></PackItem>
        })
    }
}