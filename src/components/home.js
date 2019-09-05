import React, {Component} from 'react'
import doc from '../imgs/female-doc.jpg'
import flatpickr from "flatpickr"
import 'flatpickr/dist/flatpickr.css'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            date: "0",
            appointmentType: "0"
        }
    }
    componentDidMount(){
        flatpickr(this.date,
            {
                altInput: true,
                altFormat: "F j, Y",
                dateFormat: "Y-m-d",
                minDate: "today",
                mode: "multiple",
                inline: true
            }
        )
    }
    handleDateChange = (val) => {
        this.setState({date: val})
    }
    handleAppointmentChange = (val) => {
        this.setState({appointmentType: val})
    }
    render(){
        return(
            <main>
                <div className="container-fluid doctor-name">
                    <div className="container text-center">
                        <h2>Dr Jane Smith</h2>
                        <div>
                            <span className="checked">☆</span>
                            <span className="checked">☆</span>
                            <span className="checked">☆</span>
                            <span className="checked">☆</span>
                            <span>☆</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s6">
                            <img src={doc} alt="doctor" />
                        </div>
                        <div className="col s6">
                            <h2>Dr Jane Smith</h2>
                            <p>Specialty</p>
                            <h3>About Me</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit  </p>
                            <h3>Location</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
                            <div className="row">
                                <div className="col s4">
                                    <p>Call: 100L.E.</p>
                                </div>
                                <div className="col s4">
                                    <p>Clinic: 100L.E.</p>
                                </div>
                                <div className="col s4">
                                    <p>Home: 100L.E.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container type-of-appointment">
                    <div className="row">
                        <div className="col s12">
                            <ul className="tabs">
                                <li className="tab col s4"><a className="active" href="#test1">Video Call</a></li>
                                <li className="tab col s4"><a href="#test2">Clinic</a></li>
                                <li className="tab col s4"><a href="#test3">Home</a></li>
                            </ul>
                        </div>
                        <div id="test1" className="col s12">
                            <div className="container">
                                Test 1
                            </div>
                        </div>
                        <div id="test2" className="col s12">
                            <div className="container">
                                <div className="row">
                                    <div className="col s6">
                                        <input className="display-none" type="text" ref={node => this.date = node} />
                                    </div>
                                    <div className="col s6">
                                        <h5 className="text-center">Make an appointment</h5>
                                        <select value={this.state.appointmentType} onChange={(e) => this.handleAppointmentChange(e.target.value)}>
                                            <option value="0" disabled>Please select appointment type</option>
                                            <option value="1">Video</option>
                                            <option value="2">Clinic</option>
                                            <option value="3">Home</option>
                                        </select>
                                        <div className="row">
                                            <div className="col s6">
                                                <select value={this.state.date} onChange={this.handleDateChange}>
                                                    <option value="0" disabled>Please Select a date</option>
                                                </select>
                                            </div>
                                            <div className="col s6">
                                                <select>
                                                
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="test3" className="col s12">
                            <div className="container">
                                Test 3
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home