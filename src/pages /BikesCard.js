import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';



  class BikesCard extends React.Component{
      constructor(props){
          super(props);

          this.handleClick = this.handleClick.bind(this);
      }

      handleClick(){
        console.log(this.props.bikes)
         this.props.propdata.history.push(
             {pathname : '/checkout',
             state : { bike : this.props.bikes}
            });
      }

      render(){
          return(
              <div>
                  <Card>
                      <CardImg top width="100%" src={this.props.bikes.image} alt="card image cap" />
                      <CardBody>
                          <CardTitle>{this.props.bikes.name}</CardTitle>
                          <CardSubtitle>{this.props.bikes.model}</CardSubtitle>
                          <CardText>{this.props.bikes.description}</CardText>
                        <Button style={{backgroundColor : "#568A88"}}onClick={this.handleClick}>Book</Button>
                      </CardBody>
                  </Card>
              </div>
          );
      }
  }


  export default BikesCard;