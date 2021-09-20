import React from 'react';
import "./Footer.css";

const Footer = ()=>{
    return(
        <div className="footer-block">
            <div className="Footer_container">
            <div className="col">
                <div className="col-title">Motor cycles</div>
                <div className=" col-list">
                    <ul className="list-ul" >
                        <li className="list-item">Meteor 350</li>
                        <li className="list-item">Continental GT</li>
                        <li className="list-item">Enfield Electra</li>
                        <li className="list-item">Honda H'ness</li>
                        <li className="list-item">Dominor 400</li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="col-title">Rides & events</div>
                <div className=" col-list">
                    <ul className="list-ul">
                        <li className="list-item">Rides</li>
                        <li className="list-item">Events</li>
                        <li className="list-item">Ride out</li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="col-title">Support</div>
                <div className=" col-list">
                    <ul className="list-ul">
                        <li className="list-item">Services</li>
                        <li className="list-item">Stores</li>
                        <li className="list-item">owners manual</li>
                        <li className="list-item">Contact Us</li>
                        <li className="list-item">Become a dealer</li>
                        <li className="list-item">Make it yours</li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="col-title">About Us</div>
                <div className=" col-list">
                    <ul className="list-ul">
                        <li className="list-item">Since 2020</li>
                        <li className="list-item">Articles</li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="col-title">Career</div>
                <div className=" col-list">
                    <ul className="list-ul">
                        <li className="list-item">Job openings</li>
                        <li className="list-item">Branch details</li>
                        <li className="list-item">Qualification</li>
                    </ul>
                </div>
            </div>

        </div>
        </div>
        
    )
}

export default Footer