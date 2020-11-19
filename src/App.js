import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Card,ListGroup} from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';

function App() {
  return (
    <div>
      <div className='container'>
        <div className='topic'>
          <h2>Our Pricing</h2>
          <p>Annually <Switch color="primary"/> Monthly</p>
        </div>        
        <div className='flex-container'>
          <div>
            <Card className='box1'>
              <Card.Body>
                <Card.Title><p>Basic</p><div className='extra-large'>$19.99</div></Card.Title>
                <Card.Text>
                <ListGroup>
                  <ListGroup.Item >Cras justo odio</ListGroup.Item>
                  <ListGroup.Item >Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item >Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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
    
  );
}

export default App;
