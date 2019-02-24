const Item=(props)=>(
    <div>
    <p>Name:{props.name}</p>
    <p>Contact:{props.contact}</p>
    <p>Address:{props.address}</p>

     </div>
    
);

class App extends React.Component {
    
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
                {this.friends.map((friend) => <Item name={friend.name} contact={friend.contact} address={friend.address}/>)}
            </div>
        )
    }

} 
ReactDOM.render(<App message="Friends of Neha Bhandari"/> ,document.getElementById("app"));