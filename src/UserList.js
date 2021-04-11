import React from 'react';
import {get} from './Rest'
import UserItem from "./UserItem";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        get("users").then((data) => {
            this.setState({
                userList: data
            })

        }).catch(() => {
        });
    };

    render() {
        return (
            <div>
                <div>
                    {this.state.userList.length > 0 &&
                    <div className="container">
                        <div className="row">
                            {this.state.userList.map((value, index) => {
                                return <div className="col-sm-4 p-2"
                                            key={index}>
                                    <UserItem user ={value}/>
                                </div>
                            })}

                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}