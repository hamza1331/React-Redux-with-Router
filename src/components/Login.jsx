import React, { Component } from 'react';
import { connect } from "react-redux";
import './Login.css'
import { LoginAction } from "../store/actions/actions";
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            regEmail:'',
            regPw:'',
            regPw2:'',
            firstName:'',
            lastName:'',
            logEmail:'',
            logPw:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.handleSignin = this.handleSignin.bind(this)
    }
    
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    async handleSignin(e){
        e.preventDefault()
      console.log('signin logic goes here.....')
    }
   async handleSignup(e){
        e.preventDefault()
        if(this.state.regPw===this.state.regPw2){
      console.log('signup logic goes here.....')                  
        }
        else
        alert("Password should be same...")
    }
    render() {
        return (
            <div id="fullscreen_bg" className="fullscreen_bg">
     <div className="container">
     <div className="col-md-6">
    <div className="logbox">
      <form onSubmit={this.handleSignup}>
        <h1>Create an Account</h1>
        <input value={this.state.firstName} onChange={this.handleChange} name="firstName" type="text" placeholder="First Name" autoFocus="true" required="required" className="input pass"/>
        <input value={this.state.lastName} onChange={this.handleChange} name="lastName" type="text" placeholder="Last Name" required="required" className="input pass"/>
        <input value={this.state.regEmail} onChange={this.handleChange} name="regEmail" type="email" placeholder="Email address" className="input pass"/>
        <input value={this.state.regPw} onChange={this.handleChange} name="regPw" type="password" placeholder="Choose a password" required="required" className="input pass"/>
        <input value={this.state.regPw2} onChange={this.handleChange} name="regPw2" type="password" placeholder="Confirm password" required="required" className="input pass"/>
        <input onClick={this.handleSignup} type="submit" value="Sign Up!" className="inputButton"/>
      </form>
    </div>
   </div>
    
   <div className="col-md-6">
    <div className="logbox">
      <form id="signup">
        <h1>Account Login</h1>
        <input onChange={this.handleChange} value={this.state.logEmail} name="logEmail" autoComplete='off' type="email" placeholder="Enter your email" className="input pass"/>
        <input onChange={this.handleChange} value={this.state.logPw} name="logPw" type="password" placeholder="Enter your password" required="true" className="input pass"/>
        <input onClick={this.handleSignin} type="submit" value="Sign me in!" className="inputButton"/>
      </form>
    </div>
    </div>
    </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    return({
    })
}

function mapActionsToProps(dispatch){
    return({
        login:(userName)=>{
            dispatch(LoginAction(userName))
        }
    })
}


export default connect(mapStateToProps,mapActionsToProps)(Login);

