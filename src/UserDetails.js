import React from 'react';
import {get} from './Rest'

export default class UserDetails extends React.Component {

    state = {
        user: null
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        let id = this.props.match.params.id;
        get("users/" + id).then((data) => {
            console.log(data)
            this.setState({
                user: data
            })
        }).catch(() => {
        });
    };

    render() {
        return (
            <div>
                <div>
                    {this.state.user &&
                    <div className="container">

                        <table className="table table-borderless l">
                            <tbody>
                            <tr>
                                <th scope="row">Name:</th>
                                <td>{this.state.user.name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Username:</th>
                                <td>{this.state.user.username}</td>
                            </tr>
                            <tr>
                                <th scope="row">Email:</th>
                                <td>{this.state.user.email}</td>
                            </tr>
                            <tr>
                                <th scope="row">Phone:</th>
                                <td>{this.state.user.phone}</td>
                            </tr>
                            <tr>
                                <th scope="row">Company:</th>
                                <td>{this.state.user.company.name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Website:</th>
                                <td>{this.state.user.website}</td>
                            </tr>
                            <tr>
                                <th scope="row">Address:</th>
                                <td>
                                    <ul>
                                        <li>Street: {this.state.user.address.street}</li>
                                        <li>Suite: {this.state.user.address.suite}</li>
                                        <li>City: {this.state.user.address.city}</li>
                                        <li>Zipcode: {this.state.user.address.zipcode}</li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    }
                </div>
            </div>
        );
    }
}