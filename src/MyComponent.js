import React, {Component} from 'react';

class StyleDemo extends Component {
    constructor(){
        super();
        this.state = {
            school:'西农'
        }
    }
    tick(){
        this.setState({school:this.state.school+1})
    }

    //componentDidMount(){
    //    this.interval = setInterval(this.tick.bind(this),1000)
    //}
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const MyStyle = {
            content:{
                color:'red'
            }
        };

        return (
            <div style={MyStyle.content} className="redFont" id="redFont" >
                {this.state.school}红色字体 {this.props.age+this.props.gender}
            </div>
        )
    }
};
StyleDemo.defaultProps = {
    age:19,
    gender:'man'

}
export default StyleDemo;