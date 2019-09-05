import React, {Component} from 'react'
import doc from '../imgs/female-doc.jpg'

class Home extends Component{
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
                        <div className="col-sm-6">
                            <img src={doc} alt="doctor" />
                        </div>
                        <div className="col-sm-6">
                            <h2>Dr Jane Smith</h2>
                            <p>Specialty</p>
                            <h3>About Me</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit  </p>
                            <h3>Location</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
                            <div className="row">
                                <div className="col-sm-4">
                                    <p>Call: 100L.E.</p>
                                </div>
                                <div className="col-sm-4">
                                    <p>Clinic: 100L.E.</p>
                                </div>
                                <div className="col-sm-4">
                                    <p>Home: 100L.E.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home