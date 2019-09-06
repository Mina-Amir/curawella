import React, {Component} from 'react'
import doc from '../../imgs/female-doc.jpg'

const DoctorDetails = () =>{
    return(
        <div className="container primary-margin-bottom primary-padding-top">
            <div className="row display-flex">
                <div className="col s12 m6">
                    <img src={doc} alt="doctor" className="img-fluid img-stretched" />
                </div>
                <div className="col s12 m6">
                    <h2 className="primary-color">Dr Jane Smith</h2>
                    <p>Specialty</p>
                    <h3 className="green-color">About Me</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit  </p>
                    <h3 className="green-color">Location</h3>
                    <p className="primary-color">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
                    <div className="row margin-bottom0">
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
    )
}

export default DoctorDetails