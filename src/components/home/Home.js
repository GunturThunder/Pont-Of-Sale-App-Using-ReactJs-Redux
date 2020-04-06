import React, { Component } from 'react'
import NavBar from '../navbar/NarBar'
import Content from '../content/Content'
import Cart from '../cart/Cart'
import './Home.css'

class Home extends Component {
  componentDidMount () {
    if (!window.localStorage.getItem('isAuth')) {
      this.props.history.push('/login')
    }
  }

  onLogout () {
    window.localStorage.removeItem('user-id')
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('isAuth')
    window.localStorage.removeItem('status')
    this.props.history.push('/login')
  }

  render () {
    return (
      <div className='home'>
        <NavBar />
        <Content />
        <Cart />
      </div>
    )
  }
}

export default Home
