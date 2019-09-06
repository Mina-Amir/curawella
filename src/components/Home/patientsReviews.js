import React, {Component} from 'react'
import StarRating from './starRating'

class PatientsReviews extends Component{
    constructor(props){
        super(props)
        this.state={
            width: 50
        }
    }
    handleRating = (e) => {
        let rect = this.rating.getBoundingClientRect()
        let width = e.clientX - rect.left
        this.setState({width: width})
    }
    render(){
        return(
            <div>
                <div className="review">
                    <div>
                        <i className="fas fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita </p>
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <div>
                        <StarRating isPatientReview={true} />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default PatientsReviews