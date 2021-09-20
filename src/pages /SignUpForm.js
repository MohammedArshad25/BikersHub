import React from "react";
import {NavLink} from "react-router-dom";
import '../Style/SingUp.css';

class SignUpForm extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
            hasAgreed: false,
            isEnabled: false
          };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
      }
    handleChange(e){
        let target = e.target 
        let iobject = {};
        if(target.type=== 'checkbox')
        {
            iobject['hasAgreed'] = target.checked;
            iobject['isEnabled'] = target.checked;
            console.log(target.checked);
        }
        else 
        {
            iobject[target.id] = target.value
        }
        this.setState(iobject);
    }
    handleSubmit (e){
           this.props.history.push('/sign-in');
    }
    canBeSubmitted(){
        const { email, password, fname, lname, hasAgreed } = this.state;
        return email.length > 0 && password.length > 6 && fname.length > 0 && lname.length>0 && hasAgreed === true ;
    }
    handleSignIn(){
        this.props.history.push('./sign-in');
    }
    render(){
      const isEnabled = this.canBeSubmitted()
        return(
            <div className="form-container"> 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="f-line">
                     <label className="f-label" for="fname">First Name</label> 
                     <input className="f-input"  placeholder ="Arshad" pattern ="[a-z]{1,10}" maxLength="10"onChange={this.handleChange} type = "text" id="fname" />
                    </div>
                  
                    <div className="f-line">
                        <label  className="f-label" for="lname">Last Name</label> 
                        <input  className="f-input" placeholder ="Shaik" pattern ="[a-z]{1,10}" maxLength="10" onChange={this.handleChange} type = "text" id="lname" />
                    </div>
                    
                    <div className="f-line">
                        <label className="f-label" for="email">Email</label>
                        <input className="f-input" pattern=".+@gmail\.com" placeholder="arshadshaik@gmail.com" onChange={this.handleChange} type="mail" id="email" />
                    </div>
                    <div className="f-line">
                        <label className="f-label" for="password" >password</label>
                        <input className="f-input" onChange={this.handleChange}  type="password" id="password"/>
                    </div>
                    <div className="f-check-line">
                        <input className="f-checkbox" onChange={this.handleChange} type="checkbox" id="checkbox" />
                        <label className="f-terms" for="checkbox">terms and conditions</label>
                    </div>
                   <div className="f-line">
                     <button className="f-input " id="Register" type="submit" disabled={!isEnabled}>Register</button>
                   </div>
                    
                </form>
            </div>
                <div className="f-line">
                    <label className="f-label" for="signin"> Already a User?</label>
                    <button  className="f-input" id="signin" type="button" onClick={this.handleSignIn}>Sign In</button>
                </div>
             
            </div>
            
        );
    }
}

export default SignUpForm;