import React, { Component } from 'react'
import "./App.css"
import Homepage from "./components/homepage/Homepage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"



export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Homepage />
        <Footer />
      </div>
    )
  }
}
