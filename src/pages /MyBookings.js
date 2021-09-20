import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import NavBar from "./NavBar";
import Footer from "../components/Footer";

class MyBookings extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.location.state.bike)
        this.state={
            bike : this.props.location.state.bike
        }

        this.unbook = this.unbook.bind(this)
    }

    unbook(){
        this.props.history.push('/MyBookings1');
    }
    render(){
        return(
            <div>
                <NavBar />
                <Card>
                    <CardImg src={this.state.bike.image} alt="bike image cap" />
                    <CardBody>
                        <CardTitle>{this.state.bike.name}</CardTitle>
                        <CardSubtitle>{this.state.bike.model}</CardSubtitle>
                        <CardText>{this.state.bike.description}</CardText>
                        <Button onClick={this.unbook}  color="danger">Unbook</Button>
                    </CardBody>
                </Card>
                <Footer />
            </div>
        );
    }
}

export default MyBookings;