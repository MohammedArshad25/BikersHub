import React from "react";
import {NavLink} from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "../components/Footer";



class MyBookings1 extends React.Component{
    render(){
        return(
            <div>
                  <div style={{marginBottom : "15%"}}>
                <NavBar />
                <h3 style={{color : "#568A88", textAlign:"center"}}>you dont have any bookings!! </h3>
            <div style={{display: "flex", flexDirection : "row", marginTop : "15%", marginLeft:"4%"}}>
                <NavLink to="/mainArea"style={{width: "50%"}} ><button style={{width: "80%", 
                                                                                backgroundColor : "#568A88",
                                                                                height : "50px",
                                                                                color : "white",
                                                                                fontWeight: "bold",
                                                                                fontSize: "large",
                                                                                border : "1px solid white"}}>Click here to book</button></NavLink>
                <NavLink to="/sign-in" style={{width: "50%"}}><button style={{width: "80%", 
                                                                                backgroundColor : "#568A88",
                                                                                height : "50px",
                                                                                color : "white",
                                                                                fontWeight: "bold",
                                                                                fontSize: "large",
                                                                                border : "1px solid white"}}>Logout</button></NavLink>
            </div>
        
            </div>
            <Footer />
            </div>
          
        );
    }
}

export default MyBookings1;