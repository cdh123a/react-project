/*发送regiest注册请求 login登录请求*/
import ajax from './ajax';

export const reqRegiest = (user) => ajax('/regiest',user ,'POST');
export const reqLogin = (user) => ajax('/login',user ,'POST');