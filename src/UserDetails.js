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
        console.log(id)
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

                    </div>
                    }
                </div>
            </div>
        );
    }
}