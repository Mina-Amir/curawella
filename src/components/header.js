import React, {Component} from 'react'
import logo from '../imgs/logo.png'
import person from '../imgs/person.png'
import M from 'materialize-css'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            MenuIsOpen: false
        }
    }
    componentDidMount(){
        M.AutoInit()
    }
    handleMenu = () =>{
        this.setState((prevState) => ({MenuIsOpen: !prevState.MenuIsOpen}))
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
                            <button onClick={this.handleMenu}><i className="fas fa-bars primary-color"></i></button>
                            <ul className={`${this.state.MenuIsOpen ? 'menu-open' : ''}`}>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Doctors</a></li>
                                <li><a href="#">Symptoms</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li>
                                    <select>
                                        <option>EN</option>
                                        <option>عربى</option>
                                    </select>
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