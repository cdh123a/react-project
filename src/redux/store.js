/*引入 redux 模块
* */
import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//redux的调试工具 所搭配的组件
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reduers';


export default createStore(
  reducers ,
  /*应用异步编程的中间件*/
  composeWithDevTools(applyMiddleware(thunk))
 )