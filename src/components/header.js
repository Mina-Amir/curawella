import React, {Component} from 'react'
import logo from '../imgs/logo.png'
import person from '../imgs/person.png'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            langMenuIsOpen: false
        }
    }
    langMenuHandle = () => {
        this.setState(prevState => ({langMenuIsOpen: !prevState.langMenuHandle}))
    }
    render(){
        return(
            <header>
                <div className="container-fluid bg-white">
                    <div className="container main-menu-container">
                        <div className="logo-container">
                            <img className="logo" src={logo} alt="logo" />
                            <span>Curawella</span>
                        </div>
                        <div className="primary-menu-container">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Doctors</a></li>
                                <li><a href="#">Symptoms</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li>
                                    <div className={`dropdown ${this.state.langMenuIsOpen ? 'is-active': '' }`}>
                                        <div className="dropdown-trigger">
                                            <button onClick={this.langMenuHandle} className="button" aria-haspopup="true" aria-controls="lang-menu">
                                            <span>EN/عربى</span>
                                            <span className="icon is-small">
                                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                            </button>
                                        </div>
                                        <div className="dropdown-menu" id="lang-menu" role="menu">
                                            <div className="dropdown-content">
                                                <a href="#" className="dropdown-item">
                                                    Dropdown item
                                                </a>
                                                <a className="dropdown-item">
                                                    Other dropdown item
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    Active dropdown item
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    Other dropdown item
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="profile-pic">
                                <img src={person} alt="profile"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header