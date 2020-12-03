import React, { Component } from 'react';

import network from "../services/network";

class Home extends Component {

    state = {
        countUsers: 0,
    }

    async componentDidMount() {
        try {
            const { data } = await network.getCountUsers()
            
            this.setState({ countUsers: data })
        } catch (error) {
            console.log('Error: ', error);            
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Number of Users</h1>
                        <h2>{this.state.countUsers}</h2>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
