import React from 'react';
import './App.css';
import item4 from '../src/img/item4.jpg'
import {Card, CardContent, CardActionArea, Grid, Divider, List, ListItemText} from '@material-ui/core';

function P004(){
    return (
        <div>
            <div className='container'>
                    <Card style={{marginTop:'40px'}}>
                            <CardActionArea>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={5}>
                                        <img src={item4} alt="logo" width="100%"/>
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <CardContent>
                                            <div style={{color:'slateblue', fontWeight:'bold'}}>Myntra Store</div>
                                            <p style={{fontSize:'20px'}}>Roadster Women Pink Solid Puffer Jacket</p>
                                            <Divider />
                                            <br/>
                                            <div style={{color:'slateblue', fontSize:'30px'}}>Rs 3,940</div>
                                            <Divider/>
                                            <div style={{ fontWeight:'bold', marginTop:'40px'}}>Specifications</div>
                                            <Grid container spacing={5}>
                                            <Grid item xs={12} md={6}>
                                                <List>
                                                    <ListItemText primary="Colors: Pink" className='list-item1'/>
                                                    <ListItemText primary="Usage: Casual" className='list-item'/>
                                                    <ListItemText primary="Type: Women Solid Puffer Jacket" className='list-item'/>
                                                    <ListItemText primary="Length: Regular" className='list-item'/>
                                                </List>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <List>
                                                    <ListItemText primary="Fabric: Polyester" className='list-item1'/>
                                                    <ListItemText primary="Lining Fabric: Polyester" className='list-item'/>
                                                    <ListItemText primary="Occasion: Casual" className='list-item'/>
                                                    <ListItemText primary="Number of Pockets: 2" className='list-item'/>
                                                </List>
                                            </Grid>
                                        </Grid>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                        </Card>               
            </div>
        </div>
        
    )
}
export default P004;