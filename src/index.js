
import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
import MyComponent from './MyComponent.js';

class App extends Component {
    render(){
        return (
            <div>
                <h1>hello world {this.props.name}</h1>
                <MyComponent />
            </div>
        )
    }
}

const myObj = {name:'liuzhi',age:18};
ReactDom.render(<App {...myObj} />,document.getElementById('app'));


