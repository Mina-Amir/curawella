import React, {Component} from 'react'
import doc from '../../imgs/female-doc.jpg'
import 'flatpickr/dist/flatpickr.css'
import M from 'materialize-css'
import HomeTabs from './homeTabs'
import DoctorDetails from './doctorDetails'
import StarRating from './starRating'
import PatientReviews from './patientsReviews'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            date: "0",
            clinicTime: "0",
            dateOptions:[],
            appointmentType: "0",
            width: 50
        }
    }
    componentDidMount(){
        M.AutoInit()
    }
    handleRating = (e) => {
        let rect = this.rating.getBoundingClientRect()
        let width = e.clientX - rect.left
        this.setState({width: width})
    }
    render(){
        return(
            <main>
                <StarRating isPatientReview={false} doctorName='Dr Jane Smith' />
                <div className="bg-gray">
                    <DoctorDetails />
                    <HomeTabs />
                </div>
                <div className="container">
                    <h3 className="text-center">Patient's Review</h3>
                    <div className="row">
                        <div className="col s12 m6">
                            <PatientReviews />
                        </div>
                        <div className="col s12 m6">
                            <PatientReviews />
                        </div>
                        <div className="col s12 m6">
                            <PatientReviews />
                        </div>
                        <div className="col s12 m6">
                            <PatientReviews />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home