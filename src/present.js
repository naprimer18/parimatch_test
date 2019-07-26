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
            <div>
                {this.state.isShowItem ?
                    <div>
                        <ul>
                            {this.props.item.map((data,index) =>
                                <li key={index}>
                                    {data.name}
                                   " " {data.level}
                                   " "{data.cost}
                                   " " {data.chance}
                                </li>
                            )}
                        </ul>
                        <button onClick={()=> {this.setState({isShowItem: false})}}>Exit</button>
                    </div>
                    :null}
            <button onClick={()=> {this.setState({isShowItem: true})}}>Explane</button>
            </div>
        );
    }
}

