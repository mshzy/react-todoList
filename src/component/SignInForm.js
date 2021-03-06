import React, { Component } from 'react';

export default class SignInForm extends Component {
  render() {
    return (
      <form className="signIn" onSubmit={this.props.onSubmit}> {/* 登录*/}
        <div className="row">
          <label>用户名</label>
          <input type="text" value={this.props.formData.username}
            onChange={(e)=>this.props.onChange(e,'username')} />
        </div>
        <div className="row">
          <label>密码</label>
          <input type="password" value={this.props.formData.password}
            onChange={(e)=>this.props.onChange(e,'password')} />
        </div>
        <div className="row actions">
          <button type="submit">登录</button>
        </div>
      </form>
    )
  }
}