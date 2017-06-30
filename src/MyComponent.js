import React, {Component} from 'react';

class StyleDemo extends Component {
    render(){
        const MyStyle = {
            content:{
                color:'red'
            }
        };

        return (
            <div style={MyStyle.content}>
                红色字体
            </div>
        )
    }
};

export default StyleDemo;