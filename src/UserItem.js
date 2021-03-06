import React from 'react';
import {Link} from "react-router-dom";

export default class UserItem extends React.Component {
    render() {
        return (
            <div>
                <div className="card shadow-sm  mb-2">
                    <div className="card-body">
                        <img src="user_profile.png" className="profile_pic" alt="Cinque Terre"/>
                        <span className="title">{this.props.user.name}</span>
                        <span className="username">@{this.props.user.username}</span>
                        <a href={this.props.user.website}  target="_blank">{this.props.user.website}</a>
                        <span>
                            <Link to={"/users/"+this.props.user.id}>
                                <button type="button"
                                        className="btn btn-primary mt-2">MORE DETAILS
                                </button>
                            </Link>
                        </span>

                    </div>
                </div>
            </div>
        );
    }
}