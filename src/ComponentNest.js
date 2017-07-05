/**
 * Created by admin on 2017/7/5.
 */

import React, {Component} from 'react';

class ComponentNest extends Component {
    render(){
        return (
            <ComponentNestList>
                <a href="javascript:void(0)">Facebook</a>
                <a href="javascript:void(0)">Google</a>
                <a href="javascript:void(0)">SpaceX</a>
            </ComponentNestList>
        )
    }
}
class ComponentNestList extends Component {
    render(){
        return (
            <ul>
                {
                    React.Children.map(this.props.children,function(c,i){
                        return <li id={i}>{c}</li>
                    })
                }
            </ul>
        );
    }
}



export default ComponentNest;