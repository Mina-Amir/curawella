import React, {Component} from 'react'
import Appointments from './components/getAppointments'
import Header from './components/header'
import 'materialize-css/sass/materialize.scss'
import './App.scss'
import Home from './components/Home/home'
import Footer from './components/footer'

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
        <Footer />
      </div>
    )
  }
}

export default App;
