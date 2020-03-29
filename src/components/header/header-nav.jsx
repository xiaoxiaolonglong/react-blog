/* 用户主页面的路由组件*/
import React, { Component } from 'react'

import { Layout, Menu } from 'antd';
import Logo from '../logo/logo'

const { Header} = Layout;

export default class HeaderNav extends Component {
    // 子向父组件传值
    passValue = (param) => {
        console.log(param)
    }
    render() {
        return (
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    {/* 父组件向子组件传值 */}
                    <Logo logoClick={this.passValue} navLogo={'header-nav'}/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
        )
    }
}