import React, { Component } from 'react'

export default class Present extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowItem: false
        }
    }
    render() {
        return (
            <div className='item-container'>
                {this.state.isShowItem ?
                    <div className='items'>
                        <div className='wrapper-items bold'>
                            <div className='item-name'>Items</div>
                            <div className='item'>Level</div>
                            <div className='item'>Cost</div>
                            <div className='item'>Chance</div>
                        </div>
                            {this.props.item.map((data,index) =>
                                    <div className='wrapper-items' key={index}>
                                        <div className='item-name'>{data.name}</div>
                                        <div className='item'>{data.level}</div>
                                        <div className='item'>{data.cost}</div>
                                        <div className='item'>{data.chance}</div>
                                    </div>
                            )}
                            <button className='button-exit' onClick={()=> {this.setState({isShowItem: false})}}>Hide</button>
                    </div>
                    : <div className='present-img'></div>
                }
                <button className='button-explain' onClick={()=> {this.setState({isShowItem: true})}}>Explain</button>
            </div>
        );
    }
}

