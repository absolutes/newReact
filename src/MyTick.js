/**
 * Created by admin on 2017/7/3.
 */

import React, {Component,PropTypes} from 'react';

class MyTick extends Component {
    tick(){
        this.setState({secondsElapsed:this.state.secondsElapsed + 1})
    };
    componentDidMount(){
        this.interval = setInterval(this.tick.bind(this),1000)
    };
    componentWillUnmount(){
        clearInterval(this.interval)
    };

    render(){
        return (
            <div>目前已经计时：{this.state.secondsElapsed}秒</div>
        )
    }
}

MyTick.prototype.state = {
    secondsElapsed:0
}

export default MyTick;



































