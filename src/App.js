import React, {Component} from 'react'
import './App.scss'
import Appointments from './components/getAppointments'
import Header from './components/header'
import 'bootstrap-css-only'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  componentDidMount(){
    
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Appointments />
      </div>
    )
  }
}

export default App;
