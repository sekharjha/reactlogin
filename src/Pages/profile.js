import React, { Component } from 'react'
import image from './user.png'
import {Link} from 'react-router-dom'
import '../App.css'
export default class profile extends Component {
    render() {
        return (
            <div className="profile-container">
                <h2 class="blue-text text-darken-4">User Profile</h2>
                <div class="card">
                    <div class="card-header">
                        <img  className = "profile-image" src={image} />
                    </div>
                    <div class="card-content">
                        <h3>John Doe</h3>
                        <h4>john.doe@example.com</h4>
                       
                    </div>
                    <div class="card-footer">
                    <Link to = "/signup"><button style ={{margin:"10px"}} class="btn waves-effect waves-light  red lighten-1" type="submit" name="action">Logout
                    <i class="material-icons left">exit_to_app</i>
                    </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
