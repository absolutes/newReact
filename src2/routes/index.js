/**
 * Created by admin on 2017/7/11.
 */

import React from 'react';
import {Route,IndexRoute} from 'react-router';
import Containers,{App,Home,About} from '../containers';

export default (
    <Route path="/" component={Containers.App} >
        <IndexRoute Component={Containers.Home} />
        <Route path="about" component={Containers.About}></Route>
    </Route>
)