import React from 'react';
import {WorldItem} from '../components/worldItem';

export class World extends React.Component{
    render(){
        return this.props.worldPacks.map((world)=>{
            return<WorldItem world={world} ReloadData={this.props.ReloadData}></WorldItem>

        })
    }
}