import React, {Component,PropTypes} from 'react';

class StyleDemo extends Component {
    constructor(){
        super();
        this.state = {
            school:0
        }
    }
    tick(){
        this.setState({school:Number(this.state.school+1)})
    }

    componentDidMount(){
        this.interval = setInterval(this.tick.bind(this),1000)
    }
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
                西农{this.state.school}红色字体 {this.props.age+this.props.gender}
            </div>
        )
    }
};
StyleDemo.defaultProps = {
    age:19,
    gender:'man'
}
StyleDemo.propTypes = {
    age:React.PropTypes.string,
    gender:React.PropTypes.string
}
//StyleDemo.prototype.propsType
export default StyleDemo;