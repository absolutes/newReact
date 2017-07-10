/**
 * Created by Administrator on 2017/7/8.
 */

import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';

class GitDemo extends Component {
    render(){
        return (
            <div>
               <h2>hello</h2>
            </div>
        )
    }
}
ReactDom.render(<GitDemo />,document.getElementById('gitDemo'));