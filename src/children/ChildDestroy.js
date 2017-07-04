/**
 * Created by Administrator on 2017/7/4.
 */

import React, {Component} from 'react';

class ChildDestroy extends Component {
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render(){
        console.log('render');
        return (
            <div>{this.props.value}个数字</div>
        )
    }
}

export default ChildDestroy;