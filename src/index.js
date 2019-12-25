// 导入react
import React from 'react';
import ReactDOM from 'react-dom';
//  导入index页面
import './index.css';
// 导入路由
import BasicRoute from './router/router';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BasicRoute />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
