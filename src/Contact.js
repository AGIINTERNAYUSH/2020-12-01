import React, { Component } from 'react';
import axios from 'axios';
import './contact.css';
import {Divider, Grid} from '@material-ui/core';
import facebook from '../src/img/facebook.png'
import skype from '../src/img/skype.jpg'
import instagram from '../src/img/instagram.jpg'
import SucessAlert from './SucessAlert.js'
import twitter from '../src/img/twitter.png'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);
        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.validate = this.validate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.clearErrorName=this.clearErrorName.bind(this);

        this.state = {
            name: '',
            email: '',
            product: '',
            review: '',
            errorName:'',
            errorEmail: '',
            errorProduct: '',
            errorReview: '',
            alertMsg: ''
        }
    }

    validate = () =>{
        let errorName='';
        let errorEmail= '';
        let errorProduct= '';
        let errorReview= '';
        let error = 'no';

        if(!this.state.name){
            errorName = "Please enter your name"
        }
        if (!this.state.email.includes('@')){
            errorEmail = "This email is invalid"
        }
        if(this.state.email == "" ){
            errorEmail = "Please enter your email"
        }
        
        if(this.state.product== ""){
            errorProduct = "Please enter your product"
        }
        if(this.state.review== ""){
            errorReview = "Please enter your review"
        }
        if (errorEmail || errorName || errorProduct || errorReview){
            this.setState({errorEmail, errorName, errorProduct, errorReview});
            return false;
        }
        return true;
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
    onChangeProduct(e){
        this.setState({
            product: e.target.value
        });
    }
    onChangeReview(e) {
        this.setState({
            review: e.target.value
        });
    }
    clearErrorName(){
        this.setState({
            errorName: ''
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this);
        const contact = {
            name: this.state.name,
            email: this.state.email,
            product: this.state.product,
            review: this.state.review
        }
        const isValid = this.validate();
        if (isValid){
            console.log(contact);

            axios.post('http://localhost:5000/contacts/add', contact)
                .then(res => console.log(res.data));
            
                this.setState ({
                    name: '',
                    email: '',
                    product: '',
                    review: '',
                    errorEmail: '',
                    errorName: '',
                    errorProduct: '',
                    errorReview: '',
                    alertMsg: 'success'
                });
        }else{
            this.setState ({alertMsg: ''});
        }        
    }

    render(){
        return(
            <div className="container">
                <Grid container spacing={10}>
                    <Grid item xs={12} md={8}>
                        {this.state.alertMsg=='success'?<SucessAlert/>:null}
                        <h1 style={{color:'darkblue'}}>Send review of our product:</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label style={{color:'#337ab7'}}>Name: </label>
                                <div style={{color:'red'}}>{this.state.errorName}</div>
                                {this.clearErrorName}
                                <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                            </div>
                            <div className="form-group">
                                <label style={{color:'#337ab7'}}>Email: </label>
                                <div style={{color:'red'}}>{this.state.errorEmail}</div>
                                <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                            </div>
                            <div className="form-group">
                                <label style={{color:'#337ab7'}}>Product Purchased: </label>
                                <div style={{color:'red'}}>{this.state.errorProduct}</div>
                                <input type="text" className="form-control" value={this.state.product} onChange={this.onChangeProduct} />
                            </div>
                            <div className="form-group">
                                <label style={{color:'#337ab7'}}>Review: </label>
                                <div style={{color:'red'}}>{this.state.errorReview}</div>
                                <textarea rows='5' type="textfield" className="form-control" value={this.state.review} onChange={this.onChangeReview} />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn btn-primary"/>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={4} style={{textAlign:"center"}}>
                        <div className="box2">
                            <h4 style={{color:"darkblue"}}>You can also contact us through:</h4>
                            <Divider/>
                            <a href="https://www.facebook.com">
                                <img src={facebook} className="githubIcon" alt="asdf" width="100px" height="70px" style={{align:"center"}}/>
                            </a>
                            <Divider/>
                            <a href="https://www.instagram.com">
                                <img src={instagram} className="githubIcon" alt="asdf" width="100px" height="70px" style={{align:"center"}}/>
                            </a>
                            <Divider/>
                            <a href="https://www.twitter.com">
                                <img src={twitter} className="githubIcon" alt="asdf" width="100px" height="70px" style={{align:"center"}}/>
                            </a>
                            <Divider/>
                            <a href="https://www.skype.com">
                                <img src={skype} className="githubIcon" alt="asdf" width="100px" height="70px" style={{align:"center"}}/>
                            </a>
                            <Divider/>
                        </div>                        
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}
