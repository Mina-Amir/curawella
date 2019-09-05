import React, {Component} from 'react'
import logo from '../imgs/logo.png'
import person from '../imgs/person.png'
import M from 'materialize-css'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            langMenuIsOpen: false
        }
    }
    componentDidMount(){
        M.AutoInit()
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
                                    <a className='dropdown-trigger btn lang-button' href='#' data-target='dropdown1'>EN/عربى</a>
                                    <ul id='dropdown1' className='dropdown-content'>
                                        <li><a href="#!">EN</a></li>
                                        <li className="divider" tabIndex="-1"></li>
                                        <li><a href="#!">عربى</a></li>
                                    </ul>
                                    {/* <div className={`dropdown ${this.state.langMenuIsOpen ? 'is-active': '' }`}>
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
                                                    EN
                                                </a>
                                                <a className="dropdown-item">
                                                    عربى
                                                </a>
                                            </div>
                                        </div>
                                    </div> */}
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