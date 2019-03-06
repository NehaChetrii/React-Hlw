import React, { Component } from 'react';
import Person from './person';
import './App.css';
import AddForm from "./AddForm";
import { convertPatternsToTasks } from '../../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/fast-glob/out/managers/tasks';

class App extends Component {
  App(){
    console.log("App.js constructor")
  }
  componentDidMount(){
    console.log("App.js has mounted")
  }
  componentDidUpdate(){
    console.log("App.js has updated")
  }

  
    state={
  friends:[
    {name:'Sayash Chhetrii',contact:981546798,address:'Baneshwor'},
    {name:'Sameraa Rai ',contact:9813546970,address:'Sanepa'},
    {name:'Aavash Kc',contact:9823456789, address:'Samakhusi'},
    {name:'Suyasha Shakya',contact:984567934,address:'Maitighar'}
]
    };
    save=friend=>{
      this.setState({
        friends:this.state.friends.concat([friend])
      });
    }

render(){
    return(
        <div>
            <AddForm onSave={this.save}/>

            <h3>List of Friends</h3>
            {this.state.friends.map((friend) => <Person name={friend.name} contact={friend.contact} address={friend.address}/>)}
        </div>
    )
}
}

export default App;
