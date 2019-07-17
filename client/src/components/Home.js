import React, { Component } from 'react'
import './css/home.css'
import { Jumbotron } from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <div id="HOME">
        <div style={{height: '40px'}}></div>
        <Jumbotron >
        <h1 
        className="text-center">WELCOME TO TEXAS COUNTRY</h1>
        </Jumbotron>
      </div>
    )
  }
}
