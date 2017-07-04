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
        let _that = this;
        this.setState({
            value:_that.state.value+1
        })
    }
    destroy(){
        this.setState({
            destroyed:true
        })
    }

    render(){
        if(this.state.destroyed){
            return null;
        }
        return (
            <div>
                <p>
                    <button onClick={this.increase}>每次加1</button>
                    <button onClick={this.destroy}>干掉这两个按钮</button>
                </p>
                <div>{this.state.value}</div>
            </div>
        )
    }
}

export default MyDestroy;