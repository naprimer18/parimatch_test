
import React, { Component } from 'react';
import initialData from './items'
import Present from './present'

export default class App extends Component {
    render() {
        console.log(initialData)
       return (
        <div className='container'>
             {initialData.map((data,index) =>
                 <div className='item'  style={{  backgroundImage: "url({data.image}} "}} key={index}>
                     <Present item={data.items}/>
                     <div className='name'>{data.name} </div>
                     <div className='start'>{data.start} start</div>
                     <div className='end'>{data.end} end</div>
                     <div className='description'>{data.description}</div>
                     <div className='itams-lenght'> items {data.items.length}</div>
                     <div className='probability'>chanceTotal {data.probability_total}</div>
                </div>
             )}
        </div>
    );
  }
}

