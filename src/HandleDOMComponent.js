/**
 * Created by admin on 2017/7/5.
 */

import React,{Component} from 'react';
import ReactDom,{findDOMNode} from 'react-dom';
import $ from 'jquery';

class HandleDOMComponent extends Component {
    componentDidMount(){
        let ele = findDOMNode(this.refs.content);
        let ele2 = this.refs.content;

        console.log(ele,ele2);
        console.log($(ele).html());
    }

    render(){
        return (
            <div>
                <h3>操作DOM</h3>
                <div ref='content'>DOM元素里面的内容</div>
            </div>
        );
    }
}

export default HandleDOMComponent;

















