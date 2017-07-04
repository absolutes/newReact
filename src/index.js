
import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
import MyComponent from './MyComponent.js';
import MyTick from './MyTick.js';

class App extends Component {
    render(){
        return (
            <div>
                <h1>hello world {this.props.name}</h1>
                <MyComponent {...myObj}/>
                <MyTick />
            </div>
        )
    }
}

const myObj = {name:'liuzhi',age:18};
ReactDom.render(<App {...myObj} />,document.getElementById('app'));


