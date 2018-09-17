/*入口文件：
* */
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter ,Route , Switch } from 'react-router-dom';
import {Provider} from 'react-redux';

import Main from './containers/main/main'
import Login from './containers/login/login'
import Regiest from './containers/regiest/regiest'
import store from './redux/store'

/*路由组件必须渲染时必须包裹一层 HashRouter或者BrowerRouter 实现路由组件的跳转*/
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/regiest' component={Regiest}/>
        <Route  component={Main}/>
        {/*path不指定的话 就是接收所有的路由 写在最前面会出错 ,因此写在最后面*/}
      </Switch>
    </HashRouter>
  </Provider>
   ) ,document.getElementById('root'))