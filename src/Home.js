import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import item1 from '../src/img/item1.jpg'
import item2 from '../src/img/item2.jpg'
import item3 from '../src/img/item3.jpg'
import item4 from '../src/img/item4.jpg'
import item5 from '../src/img/item5.jpg'
import item6 from '../src/img/item6.jpg'
import item7 from '../src/img/item7.jpg'
import item8 from '../src/img/item8.jpg'
import item9 from '../src/img/item9.jpg'
import item10 from '../src/img/item10.jpg'
import item11 from '../src/img/item11.jpg'
import item12 from '../src/img/item12.jpg'
import {Grid, Card, CardActionArea, CardContent, TextField} from '@material-ui/core';

let listOfItems = [
    {"id":"P001", "name":"DressBerry Women Olive Green Solid Parka", "img":item1, "price":"$48.82"},
    {"id":"P002","name":"Mast & Harbour Women Teal Blue Solid Puffer Jacket", "img":item2, "price":"$29.32"},
    {"id":"P003","name":"Mast & Harbour Women Pink Solid Padded Jacket", "img":item3, "price":"$29.32"},
    {"id":"P004","name":"Roadster Women Pink Solid Puffer Jacket", "img":item4, "price":"$39.40"},
    {"id":"P005","name":"Roadster Women Grey & Pink Colourblocked Padded Jacket", "img":item5, "price":"$35.00"},
    {"id":"P006","name":"Roadster Women Pink Solid Padded Hooded Jacket", "img":item6, "price":"$39.17"},
    {"id":"P007","name":"DressBerry Women Peach-Coloured Solid Jacket", "img":item7, "price":"$51.84"},
    {"id":"P008","id":"P001","name":"DressBerry Women Camel Brown Solid Jacket", "img":item8, "price":"$26.98"},
    {"id":"P009","name":"DressBerry Women Navy Blue Solid Puffer Jacket", "img":item9, "price":"$35.48"},
    {"id":"P010","name":"DressBerry Women Pink Solid Padded Jacket", "img":item10, "price":"$34.63"},
    {"id":"P011","name":"HERE & NOW Women Black Solid Padded Jacket", "img":item11, "price":"$41.69"},
    {"id":"P012","name":"Roadster Women Black Solid Padded Jacket", "img":item12, "price":"$26.00"}
]

function searching(items){
    return function(x){
      return x.name.toLowerCase().includes(items.toLowerCase()) || !items;
    }
  }

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          listOfItems: listOfItems,
          items: "",
        }
        this.searchFilter = this.searchFilter.bind(this);
    }
    searchFilter (e){
        this.setState({items:e.target.value})
    }

    render(){
        const {items, listOfItems} = this.state;
        return (
            <div>
                <div className='container'>
                    <div className='searchBox'>
                        <TextField type="search" variant="outlined" size="medium" fullWidth label="Search Products" onChange={this.searchFilter}  value={items}/>
                    </div>
                <Grid container spacing={2}>
                {listOfItems.filter(searching(items)).map(clothItem=> 
                    <Grid item xs={12} md={3}>
                        <Link className='navStyle' to={clothItem.id}>
                        <Card className='items'>
                            <CardActionArea>
                                <img src={clothItem.img} alt="logo" width="100%" height="50%px"/>
                                <CardContent>
                                    <h3 className='item-name'>{clothItem.name}</h3>
                                    <div className='item-price'>{clothItem.price}</div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Link>
                        
                    </Grid>  
                )}  
                </Grid> 
                </div>  
                </div>
            
        )
    }
}

    

export default Home;
