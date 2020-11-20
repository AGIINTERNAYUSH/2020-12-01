import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';

function nav(){
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                    <div className='logo'/>
                    </Typography>
                    <div className='navPageList'>
                        <Link className='navStyle' to='/'>
                            <Button color="inherit" className='pageName'>Home</Button>
                        </Link>
                        <Link className='navStyle' to='/price'>
                            <Button color="inherit" className='pageName'>Price</Button>
                        </Link>
                        <Link className='navStyle' to='/about'>
                            <Button color="inherit" className='pageName'>About</Button>
                        </Link>
                    </div>        
                </Toolbar>
            </AppBar>
        </div>
        
    )
}
export default nav;