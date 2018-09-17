/*创建reducers
* */

//引入组合多个reducers的redux自带方法
import {combineReducers} from 'redux';

 function xxx (state = 0 ,action) {
   switch (action.type) {
    default :
      return state ;
  }
}

 function yyy (state = {} ,action){
  switch (action.type) {
    default :
      return state ;
  }
}

/*
* 将多个reducers组合起来 最后只需要默认暴露一个combineReducers方法出去
* 这种方法使用后返回一个reducers的集合  通过属性名来调用对应的reducer*/
export default combineReducers({
  xxx , yyy
})
