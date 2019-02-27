import React, { Component } from 'react';
import Person from './person';
import './App.css';

class App extends Component {
  
    
  friends=[
    {name:'Sayash Chhetrii',contact:981546798,address:'Baneshwor'},
    {name:'Sameraa Rai ',contact:9813546970,address:'Sanepa'},
    {name:'Aavash Kc',contact:9823456789, address:'Samakhusi'},
    {name:'Suyasha Shakya',contact:984567934,address:'Maitighar'}
];

render(){
    return(
        <div>
            
            <h3>List of Friends</h3>
            {this.friends.map((friend) => <Person name={friend.name} contact={friend.contact} address={friend.address}/>)}
        </div>
    )
}
}

export default App;
