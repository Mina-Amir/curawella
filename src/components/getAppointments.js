import React, {Component} from 'react'
import firebase from '../firebase'
import M from 'materialize-css'
class Appointments extends Component{
    constructor(props){
        super(props)
        this.state = {
            bookings: []
        }
    }
    componentDidMount(){
        M.AutoInit()
        let modal = M.Modal.getInstance(this.modal)
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
            }, () => {
                modal.open()
            })
        })
    }
    render(){
        return(
            <div>
                <div ref={node => this.modal = node} className="modal">
                    <div className="modal-content">
                        <h4>Filtered Data</h4>
                        {this.state.bookings.map(book => {
                            return(
                                <div key={book.orderID}>
                                    <p>Order ID: {book.orderID}</p>
                                    <p>Patient Name: {book.patName}</p>
                                    <p>Appointment's Type: {book.type}</p>
                                    <p>Patient: {book.Patient}</p>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Appointments