import React from 'react';
import {NavBar , List ,InputItem ,WhiteSpace ,WingBlank ,Button} from 'antd-mobile';


import Logo from '../../components/logo';
export default class Login extends React.Component{
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

  goLogin = () => {
    /*因为都有按钮回退 因此不需要使用push 不然回退会在登录和注册之间切换*/
    this.props.history.replace('/regiest')
  }
  render () {
    return (
      <div>
        <NavBar >Boss 直聘</NavBar>
        <Logo/>
        <WhiteSpace/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名' onChange={ val => this.changeHandle('username',val)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码' onChange={ val => this.changeHandle('password',val)}>密码：</InputItem>
            <WhiteSpace/>

            <WhiteSpace/>
            <Button type='primary'>登录</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>没有账号</Button>
          </List>
        </WingBlank>

      </div>
    )
  }
}