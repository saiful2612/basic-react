import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let person={
    name:'Riyaz',
    job:'Full stack Web Developer'
  }

  const products =[
    {name:"Photohop",price:"$90.99"},
    {name:"Illustrator",price:"$70.25"},
    {name:"PDF Reader",price:"$11.99"},
    {name: "Adobe", price:"$49.99"},
    {name:"Foxit Reader",price:"$111.99"}
  ]

  const productNames=products.map(product => product.price)
  console.log(productNames)

  return (
    <div className="App">
      <header className="App-header">
        {
          products.map(product => <Product product={product}></Product>)
        }

        <Counter></Counter>
        <Crickter name="Akram Khan" job="batsman"></Crickter>
        <Crickter name="Pailot" job="Wicket Keeper"></Crickter>
        <Crickter name="Rafique" job="Bowler" ></Crickter>

        <MovieCount></MovieCount>
      </header>
    </div>
  );
}
function MovieCount(){
  const [count, setCount]= useState(0)
  const handleClick= () => setCount(count+1);
  return(
    <div>
      <button onClick={handleClick}>Add movies</button>
      <h3>Number of Movies- {count}</h3>
    </div>
  )
}
function Counter(){
  const[count,setCount]=useState(10);
  const handleDecrease= () => setCount(count -1);
  const handleIncrease= () => setCount(count +1);
  return(
    <div>
      <h3>Count:{count}</h3>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:"1px solid gray",
    borderRadius:"5px",
    backgroundColor:"lightgray",
    height:"200px",
    width:"200px",
    float:"left"
  }
  return(
    <div style={productStyle}>
      <h3>Name:{props.product.name }</h3>
      <h4>Price {props.product.price}</h4>
      <button>Buy now</button>
    </div>
  )
}

function Crickter(props){
  return (
  <div style={{border:'1px solid red',margin:'10px',padding:'20px'}}>
      <h1>Name: {props.name}</h1>
      <h3>Bangladeshi Crickter</h3>
      <p>Playing Role: {props.job}</p>
    </div>

  )
}

export default App;
