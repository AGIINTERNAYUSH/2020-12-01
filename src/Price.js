import React from 'react';
import './App.css';
import {Card} from 'react-bootstrap';
import {Switch, Grid, List, ListItemText} from '@material-ui/core';

function price(){
    return (
        <div>
      <div className='container'>
        <div className='topic'>
          <h2>Our Pricing</h2>
          <p>Annually <Switch color="primary"/> Monthly</p>
        </div> 
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card className='box1'>
              <Card.Body>
                <Card.Title><h4>Basic</h4><div className='extra-large'>$19.99</div></Card.Title>
                <Card.Text>
                  <List>
                    <ListItemText primary="500 GB Storage" className='list-item1'/>
                    <ListItemText primary="2 Users Allowed" className='list-item'/>
                    <ListItemText primary="Send up to 3 GB" className='list-item'/>
                    <button className='button1'>LEARN MORE</button>
                  </List>
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className='box1'>
              <Card.Body>
                <Card.Title><h4>Professional</h4><div className='extra-large'>$24.99</div></Card.Title>
                <Card.Text>
                  <List>
                    <ListItemText primary="1 TB Storage" className='list-item1'/>
                    <ListItemText primary="5 Users Allowed" className='list-item'/>
                    <ListItemText primary="Send up to 10 GB" className='list-item'/>
                    <button className='button1'>LEARN MORE</button>
                  </List>
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className='box1'>
              <Card.Body>
                <Card.Title><h4>Basic</h4><div className='extra-large'>$39.99</div></Card.Title>
                <Card.Text>
                  <List>
                    <ListItemText primary="2 TB Storage" className='list-item1'/>
                    <ListItemText primary="2 Users Allowed" className='list-item'/>
                    <ListItemText primary="Send up to 3 GB" className='list-item'/>
                    <button className='button1'>LEARN MORE</button>
                  </List>
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid>    
      </div>
        </div>
        
    )
}
export default price;