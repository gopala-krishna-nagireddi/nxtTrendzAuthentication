import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', loginError: ''}

  onChangeUsername = event => {
    const usernameInput = event.target.value

    this.setState({username: usernameInput})
  }

  onChangePassword = event => {
    const passwordInput = event.target.value

    this.setState({password: passwordInput})
  }

  onUserLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const {history} = this.props

      history.replace('/')
    } else {
      const errMsg = data.error_msg
      this.setState({loginError: errMsg})
    }
  }

  render() {
    const {loginError} = this.state
    return (
      <div className="login-container">
        <img
          className="website-logo-sm"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <img
          className="website-login-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="logo-form-container">
          <img
            className="website-logo-lg"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <form className="user-login-form" onSubmit={this.onUserLogin}>
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="user-input"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="user-input"
              placeholder="Password"
              onChange={this.onChangePassword}
            />

            <button type="submit" className="login-btn">
              Login
            </button>
            {loginError === '' ? null : (
              <p className="err-msg">*{loginError}</p>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
