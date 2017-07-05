
import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
import MyComponent from './MyComponent.js';
import MyTick from './MyTick.js';
import MyDestroy from './MyDestroy';
import HandleDOMComponent from './HandleDOMComponent.js';
import SetColorComponent from './SetColorComponent.js';
import ComponentNest from './ComponentNest.js';

console.log(React);
console.log(ReactDom);

class App extends Component {
    render(){
        return (
            <div>
                <h1>hello world {this.props.name}</h1>
                <MyComponent {...myObj}/>
                <MyTick />
                <MyDestroy />
                <HandleDOMComponent />
                <SetColorComponent />
                <ComponentNest />
            </div>
        )
    }
}

const myObj = {name:'liuzhi',age:20,gender:'woman'};
ReactDom.render(<App {...myObj} />,document.getElementById('app'));


