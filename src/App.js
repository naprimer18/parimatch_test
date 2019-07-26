
import React, { Component } from 'react';
import initialData from './items'
import Present from './present'
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       return (
        <div>
         <ul>
             {initialData.map((data,index) =>
                 <li key={index}>
                     {data.name}
                    'start' {data.start}
                     'end'{data.end}
                     'items' {data.items.length}
                     'chanceTotal' {data.probability_total}
                     <Present item={data.items}/>
                 </li>
             )}
         </ul>
        </div>
    );
  }
}

