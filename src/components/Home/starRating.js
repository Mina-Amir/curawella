import React, {Component} from 'react'

class StarRating extends Component{
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
        const doctorName = this.props.isPatientReview ? null : <h2>{this.props.doctorName}</h2>
        return(
            <div className={`doctor-name ${this.props.isPatientReview ? '' : 'bg-primary'}`}>
                <div className={`${this.props.isPatientReview ? 'right-align' : 'text-center container'}`}>
                    {doctorName}
                    <div ref={node => this.rating = node} onClick={this.handleRating} className="star-rating">
                        <span><i className="far fa-star"></i></span>
                        <span><i className="far fa-star"></i></span>
                        <span><i className="far fa-star"></i></span>
                        <span><i className="far fa-star"></i></span>
                        <span><i className="far fa-star"></i></span>
                        <div style={{width: `${this.state.width}px`}} className="stars-filled">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default StarRating