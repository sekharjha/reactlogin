import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import  '../App.css'
export default class login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            username:this.username,
            password:this.password
        }
        axios.post('',data).then(
            res=>{
                console.log(res)
                localStorage.setItem('token',res.data.token)
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
                <h3 className="blue-text text-darken-3">Login</h3>
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
                    <button className="btn waves-effect waves-light  green accent-4" type="submit" name="action">Login
                    <i className="material-icons left">fingerprint</i>
                    </button>
                    <Link to = "/signup"><button className="btn waves-effect waves-light  teal lighten-1" name="action">Sign Up
                    <i className="material-icons left">group_add</i>
                    </button></Link>
                    </div>
                    </form>    
                </div>
                </div>
        )
    }
}
