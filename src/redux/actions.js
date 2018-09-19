/*
* 生成action对象*/
import { reqRegiest, reqLogin } from "../api";
import {AUTH_SUCCESS , ERROR_MSG} from './actions-type';

//请求就两种回来的参数就两种  成功或者失败 因此type也就两种  产生action的函数也就两种
export const authsuccess = (user) => ({type:AUTH_SUCCESS,data:user});
export const errormsg = (msg) => ({type:ERROR_MSG,data:msg});


/*异步请求 注册请求*/
export function regiest (user)  {
  return  async dispatch => {
    //调用请求函数
  const response =  await reqRegiest(user);
    //拿到数据
    console.log(response)
  const result = response.data ;
  if (result.code === '0'){
    //注册成功 分发action
    const action = authsuccess(result.data)
    dispatch(action)
  }else {
   //注册失败
    const action = errormsg(result.msg);
    dispatch(action)
   }
  }
}


//异步请求  登录请求
export function login ({username , password}) {
  return  async dispatch => {
    //发送登录请求
   const response = await reqLogin({username , password});
   const result = response.data;
   if(result.data === '0'){
     //登录成功
     const action = authsuccess(result.data);
     dispatch(action)
   }else{
     //登录失败
     const action = errormsg(result.msg);
     dispatch(action)
   }
  }
}