// class Item extends React.Component{

// render(){
//     return(
//     <div>
//         <p>title:{this.props.title}</p>
//         <p>year:{this.props.year}</p>
//         <p>genre:{this.props.genre}</p>

//     </div>
//     )

// }
// }
//for stateless component
const Item=(props)=>(
    <div>
    <p>title:{props.title}</p>
    <p>year:{props.year}</p>
    <p>genre:{props.genre}</p>

     </div>
    
);

class App extends React.Component {
    handleClick=(e)=>{
    this.setState({name:"SAYASHA",Age:"Twenty"})
    }
    movies=[
        {title:'Dark Phoneix',year:2019,genre:'Action'},
        {title:'Avengers ',year:2019,genre:'Action'},
        {title:'Avengers:Infinity war',year:2019, genre:'Drama'},
    ];
    state={
        name:"Neha Chetrii",
        Gender:"Female",
        Age:"20 Years"

    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                Clicked</button>
                <p>message from prop is:{this.props.message}</p>
                <h1>SAY YESS!</h1>
                <p> Details<br/>{this.state.name},<br />{this.state.Age},<br/>{this.state.Gender}</p> 
                <h3>List of movies</h3>
                {this.movies.map((movie) => <Item title={movie.title} year={movie.year} genre={movie.genre}/>)}
            </div>
        )
    }

} 
ReactDOM.render(<App message="THIS is for prop"/> ,document.getElementById("app"));