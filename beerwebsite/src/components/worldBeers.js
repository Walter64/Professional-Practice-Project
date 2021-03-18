import React from 'react';

export class worldBeers extends React.Component{
    render(){
        return(
        <div>
        <ul class="breadcrumb">
            <li><a href="/">Home </a></li>
            <li><a href="/partyPack">Party Pack </a></li>
            <li>World Beers</li>
        </ul>
        <h4>Beers From Around The Globe</h4>
        </div>
        );
    }
}