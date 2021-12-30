//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Varalakshmi from './varalakshmi';
//import Sample from './lists';
import JsonData from './jsondata';



const App = () => {
  //const counters = [
  //{id:1, value:4},
  //{id:2, value:0},
  //{id:3, value:0}]
    return (
      <JsonData />
      /*<span>
      {counters.map(counter => <Varalakshmi key={counter.id} value={counter.value} />)}
      <Sample />
      <Json />
      </span>*/
    );
  }


export default App;