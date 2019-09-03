import React, {Component} from 'react'
import logo from './logo.svg'
import firebase from './firebase'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      bookings: []
    }
  }
  componentDidMount(){
    let patientsRef = firebase.database().ref('/Appointments/K0jTZLvEH8WKtvWz1TGJgMXWO7y1')
    patientsRef.on('value', (snapshot) => {
      let patients = snapshot.val()
      let patientsKey = Object.keys(patients)
      console.log(patients)
      let onlineBookings1 = []
      patientsKey.forEach(key => {
        if(patients[key].type === "Online"){
            if(patients[key].hasOwnProperty('bookings')){
              let onlineReservationsKeys = Object.keys(patients[key].bookings)
              console.log('before', onlineReservationsKeys)
              onlineReservationsKeys.filter(reservation => ((patients[key].bookings[reservation].patName).toLowerCase()).includes("muhammad"))
              console.log('after', onlineReservationsKeys)
              // let onlineBookings = onlineReservationsKeys.map(reservationKey => {
              //   patients[key].bookings[reservationKey].filter(booking => booking.)
              //   return patients[key].bookings[reservationKey]
              // })
              // onlineBookings1.push(...onlineBookings)
            }
            
          // onlineBookings.push(onlineBookingsKeys)
        }
        return null
      })
      console.log(onlineBookings1)  
    })
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
