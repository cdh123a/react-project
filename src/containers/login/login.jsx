import React from 'react';
import {NavBar , List ,InputItem ,WhiteSpace ,WingBlank ,Button} from 'antd-mobile';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from '../../redux/actions'
import Logo from '../../components/logo';
class Login extends React.Component{
  /*查看api文档 看一下状态里面需要设置什么*/
  state = {
    username : '',
    password : '',
    type : ''  /*状态就两种  dashen 和 laoban*/
  }

  /*表单的实时收集*/
  //来一个统一的回调   react事件有一个参数event  antd-mobile的事件参数为val 因为要传参数，因此在组件书写时需要包一层箭头函数   不然会在组件内即时调用
  // 多个input调用一个回调，还需要判断一下类型
  changeHandle = (type ,val) => {
    /*更新状态数据  更新多个类型的数据*/
    this.setState({
      [type]:val
    })
  }
  /*注册界面 回向数据端发送请求  异步代码都会放在action模块 先定义一个请求的函数*/

  goLogin = () => {
    /*因为都有按钮回退 因此不需要使用push 不然回退会在登录和注册之间切换*/
    this.props.history.replace('/regiest')
  }

  login = () => {
    this.props.login(this.state);
  }
  render () {
    const {redirectTo ,msg} = this.props ;
    if(redirectTo) {
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar >Boss 直聘</NavBar>
        <Logo/>
        <WhiteSpace/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            { msg ? <p style={{textAlign:'center',color:'red',fontSize:'14px'}}>{msg}</p> : null }
            <InputItem placeholder='请输入用户名' onChange={ val => this.changeHandle('username',val)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码' onChange={ val => this.changeHandle('password',val)}>密码：</InputItem>
            <WhiteSpace/>

            <WhiteSpace/>
            <Button type='primary' onClick={this.login}>登录</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>没有账号</Button>
          </List>
        </WingBlank>

      </div>
    )
  }
}

export default  connect(
  state => ({ msg :state.user.msg ,redirectTo : state.user.redirectTo}),
  {login}
)(Login)