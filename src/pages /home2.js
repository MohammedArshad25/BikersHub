import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from './NavBar';
import '../Style/home2.css';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate : null,
            endDate : null
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.history.push('/mainArea');
    }
    handleChangeStart(date){
        this.setState({startDate : date });
    }
    handleChangeEnd(date){
        this.setState({endDate : date});
    }
    canBeSearched(){
        const {startDate , endDate} = this.state;
        return(startDate!= null && endDate!=null)
    }
    render(){
        const isEnabled = this.canBeSearched();
        return(
            <div div className="h-container"> 
                  <NavBar />
                  <div className="h-box">
                    <div className="h-date-container">
                        <div className="h-item">
                            <label for="datepicker" >Start Date</label>
                            <DatePicker  onChange={(date)=>this.handleChangeStart(date)}
                                        selected={this.state.startDate}/>
                        </div>
                        <div className="h-item">
                            <label for="datepicker" >End Date</label>
                            <DatePicker onChange={(date)=>this.handleChangeEnd(date)} 
                                    minDate={(this.state.startDate)?this.state.startDate:null} 
                                    selected={this.state.endDate}
                                    />
                        </div>
                    </div>
                    <div className="h-button">
                        <button className="h-button-b" disabled={!isEnabled} onClick={this.handleClick} type="button">Search bikes </button>
                    </div>

                  </div>
                  
                          
            </div>
          
        );
    }
}


export default Home;