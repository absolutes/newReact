/**
 * Created by Administrator on 2017/7/8.
 */

import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes';

let root = document.getElementById('gitDemo');
ReactDom.render(<Router routes={routes} history={browserHistory} />,root);