import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { Button } from 'antd-mobile';
import user from './images/用户.png'
import pwd from './images/密码.png'
export default class Login extends Component {
      handleClick = () => {
        this.inputRef.focus();
      }
    render() {
        // const { getFieldProps } = this.props.form;
        return (
            <div>
                <NavBar style={{height:'100px'}}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >登陆</NavBar>

                <InputItem placeholder="手机/邮箱">
                    <div style={{ backgroundImage: `url(${user})`, backgroundSize: 'cover', height: '22px', width: '22px'}} />
                </InputItem>
                <InputItem placeholder="密码">
                    <div style={{ backgroundImage: `url(${pwd})`, backgroundSize: 'cover', height: '22px', width: '22px'}} />
                </InputItem>
                <br />
                <WhiteSpace />
                <Button type="primary" style={{backgroundColor:'#3fcccb'}}>登陆</Button>
                <WhiteSpace />
                <p className="pp">
                    新用户注册&nbsp;&nbsp; | &nbsp;&nbsp;忘记密码
                </p>
                <WhiteSpace style={{height:'100px'}}/>
                <p className="bb">第三方登录</p>
                <ul className="cc">
                    <li>QQ</li>
                    <li>微博</li>
                    <li>微信</li>
                </ul>
            </div>
        )
    }
}