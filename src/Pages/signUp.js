import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  '../App.css'
export default class login extends Component {
    render() {
        return (
            <div className="card-panel">
                <h3 class="blue-text text-darken-3">Sign Up</h3>
                <div className = "row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="username" type="text" class="validate"/>
                                <label for="username">username</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s6">
                                <input id="password" type="text" className="validate"/>
                                <label for="password">password</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s6">
                                <input id="confirm_password" type="text" className="validate"/>
                                <label for="confirm_password">Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                    <Link to='/'>
                    <button className="btn waves-effect waves-light  blue lighten-1" type="submit" name="action">Login
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
