import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4 ">
        <div className="container">
            <a className="navbar-brand" href="Dashboard.html">
                Shopping Application
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon">
                </span> 
            </button>

            <div className="collapse navbar-collapse font-weight-bold" id="mobile-nav">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>

        )
    }
}
export default Header
