import React, { Component } from 'react'

export default class Present extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowItem: false
        }
    }
    render() {
    console.log(this.props.item);
        return (
            <div className='item-container'>
                {this.state.isShowItem ?
                    <div className='items'>
                        <ul>
                            {this.props.item.map((data,index) =>
                                <li key={index}>
                                    {data.name}
                                   " " {data.level}
                                   " "{data.cost}
                                   " " {data.chance}
                                </li>
                            )}
                            <button onClick={()=> {this.setState({isShowItem: false})}}>Exit</button>
                        </ul>
                    </div>
                    : <div style={{ backgroundImage: `url(https://www.stickees.com/files/love/gifts/458-yellow-and-red-gift-box.png)`, width:'280px', height:'260px'}}></div>
                }

                <button onClick={()=> {this.setState({isShowItem: true})}}>Explane</button>
            </div>
        );
    }
}

