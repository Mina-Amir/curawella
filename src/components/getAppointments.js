import React, {Component} from 'react'
import firebase from '../firebase'
class Appointments extends Component{
    constructor(props){
        super(props)
        this.state = {
            bookings: [],
            test:[]
        }
    }
    componentDidMount(){
        let patientsRef = firebase.database().ref('/Appointments/K0jTZLvEH8WKtvWz1TGJgMXWO7y1')
        patientsRef.on('value', (snapshot) => {
            let patients = snapshot.val()
            let patientsValues = Object.values(patients)
            let onlineReservation = patientsValues.filter(value => value.type === "Online")
            let bookingsObj = onlineReservation.map(reservation => {
                return reservation.bookings
            })
            let bookings = []
            bookingsObj.forEach(booking => {
                if(booking !== undefined){
                bookings.push(...(Object.values(booking)))
                }
            })
            console.log(bookings)
            let muhammadBookings = bookings.filter(book => ((book.patName).toLowerCase()).includes("muhammad"))
            console.log(muhammadBookings)
            this.setState({
                bookings: [...muhammadBookings]
            })
        })
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Appointments