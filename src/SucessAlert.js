import React, { Component } from 'react';
import Alert from '@material-ui/lab/Alert';
export default class SucessAlert extends Component{
    render() {
        return(
            <div style={{width:'105%', marginTop:'20px'}}>
                <Alert severity="success">Thank you for your review.</Alert>
            </div>
        );
        
    }
}