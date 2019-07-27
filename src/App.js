
import React, { Component } from 'react';
import initialData from './items'
import Present from './present'

export default class App extends Component {
    render() {
       return (
        <div className='container'>
             {initialData.map((data,index) =>
                 <div className='item-block' /*style={{  backgroundImage: "url({data.image}} "}} */ key={index}>
                     <Present item={data.items}/>
                     <div className='name'>{data.name} </div>
                     <div className='start'><div className='green'>{data.start.split('T')[0]}</div>start</div>
                     <div className='end'><div className='green'>{data.end.split('T')[0]}</div> end</div>
                     <div className='description'>{data.description}</div>
                     <div className='items-lenght'><div className='blue'>{data.items.length}</div>items</div>
                     <div className='probability'><div className='blue'>{data.probability_total}</div>chanceTotal</div>
                </div>
             )}
        </div>
    );
  }
}

