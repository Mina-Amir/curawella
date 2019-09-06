import React, {Component} from 'react'
import M from 'materialize-css'
import flatpickr from 'flatpickr'

class HomeTabs extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: "0",
            clinicTime: "0",
            dateOptions:[],
            appointmentType: "0"
        }
    }
    componentDidMount(){
        M.AutoInit()
        flatpickr(this.date,
            {
                altInput: true,
                altFormat: "F j, Y",
                dateFormat: "d-m-Y",
                minDate: "today",
                mode: "multiple",
                inline: true,
                onChange: (selectedDates,dateStr) => {
                   this.setState({dateOptions: dateStr.split(",")}, ()=>{
                       if(this.state.dateOptions[0] === ""){
                        this.setState({date: "0"})
                       }
                        M.AutoInit()    
                   })
                }
            }
        )
    }
    handleSelectChange = (val, data) => {
        this.setState({[data]: val.target.value})
    }
    render(){
        return(
            <div className="container type-of-appointment">
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s12 m4"><a className="active" href="#video">Video Call</a></li>
                            <li className="tab col s12 m4"><a href="#clinic">Clinic</a></li>
                            <li className="tab col s12 m4"><a href="#home">Home</a></li>
                        </ul>
                    </div>
                    <div id="video" className="col s12">
                        <div className="container">
                            <div className="row display-flex">
                                <div className="col s12 l6 mobile-margin-bottom">
                                    <div className="bg-white-with-shadow mobile-full-width">
                                        <input className="display-none" type="text" ref={node => this.date = node} />
                                    </div>
                                </div>
                                <div className="col s12 l6">
                                    <div className="bg-white-with-shadow form-container">
                                        <h5 className="text-center">Make an appointment</h5>
                                        <form>
                                            <select value={this.state.appointmentType} onChange={(e) => this.handleSelectChange(e, 'appointmentType')}>
                                                <option value="0">Please select appointment type</option>
                                                <option value="1">Video</option>
                                                <option value="2">Clinic</option>
                                                <option value="3">Home</option>
                                            </select>
                                            <div className="row">
                                                <div className="col s12 xl6">
                                                    <select value={this.state.date} onChange={(e) => this.handleSelectChange(e, 'date')}>
                                                        <option value="0">Please Select a date</option>
                                                        {this.state.dateOptions.map(option => {
                                                            return <option key={option} value={option}>{option}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col s12 xl6">
                                                    <select value={this.state.clinicTime} onChange={(e) => this.handleSelectChange(e, 'clinicTime')}>
                                                        <option>Please Select Time</option>
                                                        <option>9 AM</option>
                                                        <option>10 AM</option>
                                                        <option>11 AM</option>
                                                        <option>12 PM</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="clinic" className="col s12">
                        <div className="container">
                            Test 2
                        </div>
                    </div>
                    <div id="home" className="col s12">
                        <div className="container">
                            Test 3
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeTabs