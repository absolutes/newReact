/**
 * Created by admin on 2017/7/4.
 */

import React, {Component} from 'react';
import ChildDestroy from './children/ChildDestroy.js';

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
            return (
                <div>已经拆除</div>
            );
        }
        return (
            <div>
                <p>
                    <button onClick={this.increase.bind(this)}>每次加1</button>
                    <button onClick={this.destroy.bind(this)}>干掉这两个按钮</button>
                </p>
                <ChildDestroy value={this.state.value} />
            </div>
        )
    }
}

export default MyDestroy;