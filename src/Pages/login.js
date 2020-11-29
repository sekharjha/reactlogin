import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  '../App.css'
export default class login extends Component {
    render() {
        return (
            <div className="card-panel">
                <h3 className="blue-text text-darken-3">Login</h3>
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
                                <input id="password" type="text" class="validate"/>
                                <label for="password">password</label>
                        </div>
                    </div>
                    <div className="row">
                    <button className="btn waves-effect waves-light  green accent-4" type="submit" name="action">Login
                    <i class="material-icons left">fingerprint</i>
                    </button>
                    <Link to = "/signup"><button class="btn waves-effect waves-light  teal lighten-1" type="submit" name="action">Sign Up
                    <i class="material-icons left">group_add</i>
                    </button></Link>
                    </div>
                    </form>    
                </div>
                </div>
        )
    }
}
