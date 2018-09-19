import React from 'react';
/*引入蚂蚁金服的组件*/
import {NavBar , List ,InputItem ,WhiteSpace ,WingBlank ,Radio ,Button } from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {regiest} from "../../redux/actions";
import Logo from '../../components/logo';
/*语法规定  这种定义的const let 都需要放在import引入的后面 不然会报错*/
const ListItem = List.Item ;

 class Regiest extends React.Component{
  /*查看api文档 看一下状态里面需要设置什么*/
  state = {
    username : '',
    password : '',
    password2 : '',
    type : 'dashen'  /*状态就两种  dashen 和 laoban*/
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
    this.props.history.replace('/login')
  }

  //注册
  regiester = () => {
    //发送请求
    this.props.regiest(this.state);
  }

  render () {
    const {type} = this.state ;
    //先重定向
    const {redirectTo ,msg} = this.props;
    //如果redirectTo存在  说明已经返回了响应 跳转到主页面
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
            <InputItem type='password' placeholder='请再次输入密码'  onChange={ val => this.changeHandle('password2',val)}>确认密码：</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>类型：</span>&nbsp;&nbsp;&nbsp;
              <Radio checked={type ==='dashen'} onChange={() => this.changeHandle('type','dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={type ==='laoban'} onChange={() => this.changeHandle('type','laoban')}>老板</Radio>
            </ListItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.regiester}>注册</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>已有账号</Button>
          </List>
        </WingBlank>
      </div>
      )
  }
}

//将connect映射到UI组件暴露出去  暴露出去的是容器组件
export default connect(
  /*需要将msg返回 然后渲染到页面  注册成功要跳转到主页面  要重定向的路由*/
  state => ({ msg : state.user.msg ,redirectTo : state.user.redirectTo}) ,
  {regiest}
)(Regiest)


/*Radio上的checked 初始时type是'dashen'，一开始就是true 点击的时候无法触发onChange
 * 点击'老板'时 ，type能发生改变 点击时将type转变为'laoban' ，会触发onChange事件，此时又改变了状态 */