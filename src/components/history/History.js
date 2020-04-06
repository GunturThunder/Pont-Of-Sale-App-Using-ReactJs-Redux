import React, { Component } from 'react'
import NavBarHistory from '../navbar/NarBarHistory'
import ContentHistory from '../content/ContentHistory'
import Cart from '../cart/Cart'
import './History.css'

class History extends Component {
  render () {
    return (
      <div className='wrap'>
        <NavBarHistory />
        <ContentHistory />
        <Cart />
      </div>
    )
  }
}

export default History
