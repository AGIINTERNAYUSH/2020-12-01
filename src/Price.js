import React from 'react';
import './App.css';
import {Card,ListGroup} from 'react-bootstrap';
import {Switch} from '@material-ui/core';

function nav(){
    return (
        <div>
            <div className='background'>
      <div className='container'>
        <div className='topic'>
          <h2>Our Pricing</h2>
          <p>Annually <Switch color="primary"/> Monthly</p>
        </div>        
        <div className='flex-container'>
          <div>
            <Card className='box1'>
              <Card.Body>
                <Card.Title><h4>Basic</h4><div className='extra-large'>$19.99</div></Card.Title>
                <Card.Text>
                <ListGroup>
                  <ListGroup.Item >500 GB Storage</ListGroup.Item>
                  <ListGroup.Item >2 Users Allowed</ListGroup.Item>
                  <ListGroup.Item >Send upto 3GB</ListGroup.Item>
                </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='box1'>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='box1'>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>      
        </div>      
      </div>
    </div>
        </div>
        
    )
}
export default nav;