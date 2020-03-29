import React, { Component } from 'react'
import logo from './logo.png'
import './logo.less'
/* 简 单 的 显 示 logo 的 组 件 */
export default class Logo extends Component { 
    // 子向父组件传值
    handle = (param) => {
        this.props.logoClick(param)
    }
    render() {
        {/* 父组件向子组件传值 */}
        let {navLogo} = this.props;
        return (
            // 子向父组件传值
            <div onClick={() => this.handle('传值')} className="logo-container" className={navLogo}>
                <img src={logo} alt="logo" className='logo-img' />
            </div>)
    }
}
