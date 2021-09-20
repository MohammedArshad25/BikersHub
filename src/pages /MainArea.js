import React from "react";
import { Container, Row, Col } from 'reactstrap';
import NavBar from "./NavBar";
import BikesCard from "./BikesCard";
import Bike from "./Data";

class MainArea extends React.Component{
    constructor(props){
        super(props);

        this.state ={bike : Bike}
    }
    render(){
        let bikeCards = this.state.bike.map(bikes => {
            return (
            
                    <Col style={{marginLeft : "50px"}}>
                        <BikesCard bikes={bikes} propdata={this.props} />
                    </Col>
                
                
            )
        })
        return(
            <div>
                <NavBar />
                <Row xs="4" style={{ marginBottom: "5%", marginLeft: "5%"}}>
                    {bikeCards}
                </Row>
            </div>
        );
    }
}

export default MainArea;