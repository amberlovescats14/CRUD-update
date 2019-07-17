import React, { Component } from "react";
import { BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav'
import Router from './Router'
import './App.css'

class App extends Component {
  // constructor() {
  //   super();
  // }
  // componentDidMount() {
  // }
  render() {
    return (
      <BrowserRouter>
         <div>
        <Nav/>
        <Router/>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);


