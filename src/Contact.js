import React, { Component } from 'react';
import axios from 'axios';
import './contact.css';
import {Grid} from '@material-ui/core';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            review: ''
        }
    }


    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeReview(e) {
        this.setState({
            review: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this);
        const contact = {
            name: this.state.name,
            email: this.state.email,
            review: this.state.review
        }

        console.log(contact);

        axios.post('http://localhost:5000/contacts/add', contact)
            .then(res => console.log(res.data));
    }

    render(){
        return(
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label style={{color:'#337ab7'}}>Name: </label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                            </div>
                            <div className="form-group">
                                <label style={{color:'#337ab7'}}>Email: </label>
                                <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                            </div>
                            <div className="form-group">
                                <label style={{color:'#337ab7'}}>Review: </label>
                                <input type="text" className="form-control" value={this.state.review} onChange={this.onChangeReview} />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn btn-primary"/>
                            </div>
                        </form>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}
