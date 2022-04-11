import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,ListGroupItem,ListGroup} from 'react-bootstrap'

function App() {
  const [data,setdata]=useState([]);
  const [collection,setcollection]=useState([]);
  const men=()=>{
    const res=collection.filter((i)=>{
      return(i.category==="men\'s clothing")
    })
    setdata(res);
  }
  const women=()=>{
    const res=collection.filter((i)=>{
      return(i.category==="women\'s clothing")
    })
    setdata(res);
  }
  const electronics=()=>{
    const res=collection.filter((i)=>{
      return(i.category==="electronics")
    })
    setdata(res);
  }
  const jewellery=()=>{
    const res=collection.filter((i)=>{
      return(i.category==="jewelery")
    })
    setdata(res);
  }
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((result)=>{
      console.log(result.data);
      setdata(result.data);
      setcollection(result.data);
    })

  },[])
  return (
    <>
    <>
  <Button variant="secondary" onClick={men}>Mens Clothing</Button>{' '}
  <Button variant="secondary" onClick={women}>Womens Clothing</Button>{' '}
  <Button variant="secondary" onClick={jewellery}>Jewellery</Button>{' '}
  <Button variant="secondary" onClick={electronics}>Electronics</Button>
    </>
    <div className='d-flex flex-row flex-wrap'>
   { data.map((i)=>{
      return(
        <Card style={{ width: '18rem', margin:'10px' }}>
  <Card.Img variant="top" src={i.image} style={{width:'150px',height:"100px"}} />
  <Card.Body>
    <Card.Title>{i.title}</Card.Title>
    
    
  <ListGroup className="list-group-flush">
    <ListGroupItem>Price:{i.price}</ListGroupItem>
    <ListGroupItem>Category:{i.category}</ListGroupItem>
    
  </ListGroup>
  
  </Card.Body>
</Card>

      )
    })}
    
    
</div>
</>
  );
}

export default App;
