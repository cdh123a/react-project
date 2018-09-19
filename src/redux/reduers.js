/*创建reducers
* */

//引入组合多个reducers的redux自带方法
import {combineReducers} from 'redux';

import {AUTH_SUCCESS,ERROR_MSG} from './actions-type';

//定义一个user初始对象
const userOption = {
  username : '',
  _id : '',
  type : '',
  msg : '',
  redirectTo: ''
}

 function user ( state = userOption ,action) {
   switch (action.type) {
     case AUTH_SUCCESS :  //更新状态为返回的数据
       return state = { ...action.data ,redirectTo : '/main' } ;
     case ERROR_MSG :  //将整个初始状态展开  然后只更新msg
       return state = {...state, msg : action.data} ;
    default :
      return state ;
  }
}

/*
* 将多个reducers组合起来 最后只需要默认暴露一个combineReducers方法出去
* 这种方法使用后返回一个reducers的集合  通过属性名来调用对应的reducer
* 组合reduxers后 这个函数返回的就是一个reducer更新state的对象集合
 * state = { user ：user（）}*/
export default combineReducers({
  user
})
