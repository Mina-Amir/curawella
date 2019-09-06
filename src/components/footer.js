import React from 'react'

const Footer = () => {
    return(
        <footer className="bg-black">
            <div className="container">
                <div className="row margin-bottom0">
                    <div className="col s6 m3">
                        <p className="secondary-color">Home</p>
                        <ul>
                            <li>Doctors</li>
                            <li>Symptoms</li>
                            <li>Our Partners</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col s6 m3">
                        <p className="secondary-color">Popular Search</p>
                        <ul>
                            <li>Uorology</li>
                            <li>Cardio</li>
                            <li>Uorology</li>
                            <li>Symptom 1</li>
                        </ul>
                    </div>
                    <div className="col s6 m3">
                        <p className="secondary-color">Follow us on</p>
                        <ul>
                            <li>Facebook Link</li>
                            <li>Twitter Link</li>
                            <li>Youtube Link</li>
                            <li>LinkedIn Link</li>
                        </ul>
                    </div>
                    <div className="col s6 m3">
                        <p className="third-color">Download Our App</p>
                        <ul>
                            <li>Google Play Logo</li>
                            <li>Apple Store Logo</li>
                        </ul>
                    </div>
                </div>
                <div className="row margin-bottom0">
                    <div className="col s12 m3 offset-m9">
                        <p className="primary-color">Curawella</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer