import React from "react"
import {Card, CardTitle, CardSubtitle, CardImg, CardBody, CardText, Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";

class Checkout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           bike : this.props.location.state.bike
        };
    
        this.confirmClick = this.confirmClick.bind(this);
        this.goBackClick = this.goBackClick.bind(this);
      }
    
      confirmClick() {
          let bike = this.state.bike;
        this.props.history.push({
            pathname : "/MyBookings",
            state : { bike : bike}  
        });
      }
    
      goBackClick() {
        this.props.history.push("/home");
      }
    render(){
        return(
            <div>
                <NavBar />
                <Card>
                    <CardImg  src={this.state.bike.image} alt="bike image cap" />
                    <CardBody>
                        <CardTitle>{this.state.bike.name}</CardTitle>
                        <CardSubtitle>{this.state.bike.model}</CardSubtitle>
                        <CardText>{this.state.bike.description}</CardText>
                        <Button style={{backgroundColor : "#568A88"}} onClick={this.confirmClick} width="50%">Book</Button>
                        <Button style={{backgroundColor : "#568A88"}} onClick={this.goBackClick} width="50%">Go Back</Button>
                    </CardBody>
                </Card>
            </div>  
        );
    }
}

export default Checkout;