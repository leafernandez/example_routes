import React, { Component } from 'react'

import network from "../services/network";

class Users extends Component {

    constructor() {
        super()

        this.showDetails = this.showDetails.bind(this)
    }

    state = {
        userNames: [],
        userDetails: {}
    }

    async componentDidMount() {
        try {
            const { data } = await network.getUsers()

            this.setState({ userNames: data })
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    async showDetails(evt) {
        evt.preventDefault()

        try {
            const { data } = await network.getUser(evt.target.id)

            this.setState({ userDetails: data })
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    render() {
        const { userDetails } = this.state

        return (
            <div className="container">
                <h2>Users</h2>
                <div className="row">
                    <div className="col-6">
                        <div className="list-group">
                            {this.state.userNames.map(elem => {
                                return (
                                    <button className={`list-group-item list-group-item-action ${elem._id === userDetails._id ? 'active' : ''}`}
                                        onClick={this.showDetails}
                                        id={elem._id}
                                        key={elem._id}>
                                        {elem.firstName}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="tab-content">
                            <div className={`tab-pane fade ${Object.keys(userDetails).length ? 'show active' : ''}`} id="" role="tabpanel" aria-labelledby="list-profile-list">
                                <div className="row">
                                    <div className="col">
                                        <label>First Name: {userDetails.firstName}</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label>Surname: {userDetails.surname}</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label>Age: {userDetails.age}</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label>City: {userDetails.city}</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label>Country: {userDetails.country}</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label>Does he/she have a car?: {userDetails.hasCar ? 'Yes' : 'No'}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;
