
import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';

class App extends Component {
    render(){
        return (
            <div>
                <h1>参加React高级课程</h1>
            </div>
        )
    }
}
ReactDom.render(<App />,document.getElementById('app'));


