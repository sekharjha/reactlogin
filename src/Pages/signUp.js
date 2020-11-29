import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import  '../App.css'
export default class login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            username:this.username,
            password:this.password,
            confirm_password:this.confirmpassword
        }
        console.log(data)
        axios.post('',data).then(
            res=>{
                console.log(res)
            }
        ).catch(
            err=>{
                console.log(err)
            }
        )
    }
    render() {
        return (
            <div className="card-panel">
                <h3 className="blue-text text-darken-3">Sign Up</h3>
                <div className = "row">
                <form onSubmit = {this.handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="username" type="text" className="validate" onChange={e=>{this.username=e.target.value}}/>
                                <label htmlfor="username">username</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s6">
                                <input id="password" type="text" className="validate" onChange={e=>{this.password=e.target.value}}/>
                                <label htmlfor="password">password</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s6">
                                <input id="confirm_password" type="text" className="validate" onChange={e=>{this.confirmpassword=e.target.value}}/>
                                <label htmlfor="confirm_password">Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                    <Link to='/'>
                    <button className="btn waves-effect waves-light  blue lighten-1"  name="action">Login
                    <i className="material-icons right">send</i>
                    </button>
                    </Link>
                    <button className="btn waves-effect waves-light  blue lighten-1" type="submit" name="action">Sign Up
                    <i className="material-icons right">power_settings_new</i>
                    </button>
                    </div>
                    </form>    
                </div>
                </div>
        )
    }
}
