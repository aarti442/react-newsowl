import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">News<span className='owl'>Owl</span></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink  className={({ isActive }) => `nav-link ${isActive ? "active" : "nav-link"}`}  to="/">Business</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink  className={({ isActive }) => `nav-link ${isActive ? "active" : "nav-link"}`}  to="/sports">Sports</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink  className={({ isActive }) => `nav-link ${isActive ? "active" : "nav-link"}`}  to="/technology">Technology</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink  className={({ isActive }) => `nav-link ${isActive ? "active" : "nav-link "}`}  to="/health">Health</NavLink>
                                </li>
                               
                             
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
