import React from "react";
import "../Style/SignIn.css";


class SignInForm extends React.Component {
    constructor(){
        super();
        this.state={
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    handleChange(e){
        let target=e.target
        let iobject={};
        iobject[target.id]= target.value;
        this.setState(iobject);
    }
    canBeSubmitted(){
        const {email, password} = this.state;
        return email.length>0 && password.length>6 ;
    }
    handleSignUp(){
        this.props.history.push('/');
    }
    handleSubmit(){
        this.props.history.push('/home');
    }
    render()
    {
        const isEnabled = this.canBeSubmitted();
        return(
            <div className="form-container">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="f-line">
                            <label className="f-label" for="email">Email</label>
                            <input className="f-input"onChange={this.handleChange}type="mail" id="email"/>
                        </div>
                        <div className="f-line">
                            <label className="f-label" for="password">password</label>
                            <input className="f-input" onChange={this.handleChange} type="password" id="password" />
                        </div>
                        <div className="f-line">
                            <button className="f-input submit" type="submit" disabled={!isEnabled}>Login</button>
                        </div>
                       
                    </form>
                </div>
              
                <label className="f-label" for="signin">not yet signedUp?</label>
                <button id="signin" className="f-input" type="submit" onClick={this.handleSignUp}>SignUp</button>
            </div>      
        );
    }
}

export default SignInForm;