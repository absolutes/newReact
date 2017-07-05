/**
 * Created by admin on 2017/7/5.
 */

import React,{Component} from 'react';
import ReactDom,{findDOMNode} from 'react-dom';
let _this;
class setColorComponent extends Component {
    constructor(){
        super();
        this.state = {
            red:0,
            green:0,
            pink:0
        }
        _this = this;
    }
    update(e){
        _this.setState({
            red:findDOMNode(_this.refs.red).value,
            green:findDOMNode(_this.refs.green).value,
            pink:findDOMNode(_this.refs.pink).value
        })
    }
    aa(){
        console.log('aa')
    }
    shouldComponentUpdate(){
        return true;
    }
    componentWillUpdate(){
        //this.aa();
    }

    render(){
        return (
            <div>
                <Slider ref="red" value={this.state.red} update={this.update} /><span>{this.state.red}</span><br />
                <Slider ref="green" value={this.state.green} update={this.update} /><span>{this.state.green}</span><br />
                <Slider ref="pink" value={this.state.pink} update={this.update} /><span>{this.state.pink}</span>
            </div>
        );
    }
}

class Slider extends Component {
    render(){
        return (
            <input type="range"
                min="0" max="255" onChange={this.props.update} value={this.props.value}
            />
        )
    }
}

export default setColorComponent;









