import React, {Component} from 'react'
import './App.scss'
import Appointments from './components/getAppointments'
import Header from './components/header'
import 'bulma'
import 'bootstrap-css-only'
import Home from './components/home'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Home />
        <Appointments />
      </div>
    )
  }
}

export default App;
