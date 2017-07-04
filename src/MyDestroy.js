/**
 * Created by admin on 2017/7/4.
 */

import React, {Component} from 'react';

class MyDestroy extends Component {
    constructor(){
        super();
        this.state = {
            value:1,
            destroyed:false
        }
    }
    increase(){
        this.setState({
            value:this.state.value+1
        })
    }
    destroy(){
        this.setState({
            destroyed:true
        })
    }

    render(){
        console.log(this.state.destroyed);

        if(this.state.destroyed){
            return null;
        }
        return (
            <div>
                <p>
                    <button onClick={this.increase.bind(this)}>每次加1</button>
                    <button onClick={this.destroy.bind(this)}>干掉这两个按钮</button>
                </p>
                <div>{this.state.value}</div>
            </div>
        )
    }
}

export default MyDestroy;