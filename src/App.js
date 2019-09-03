import React, {Component} from 'react'
import logo from './logo.svg'
import firebase from './firebase'
import './App.css'

class App extends Component{
  componentDidMount(){
    // let patientsRef = firebase.database().ref('/Appointments/K0jTZLvEH8WKtvWz1TGJgMXWO7y1')
    // patientsRef.on('value', snapshot => {
    //   let patients = snapshot.val()
    //   console.log(patients)
    // })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
