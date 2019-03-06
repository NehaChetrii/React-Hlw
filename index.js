class App extends React.Component {
    handleClick=(e)=>{
    this.setState({name:"Say okAy!"})
    };
    state={
        name:"Neha Chhetri"
    }
    render(){
        return(
            <div>
            
                <input type="button" onClick={this.handleClick} value="clickMe" />
            <h1>Hello react!</h1>
            <p> Oh yes {this.state.name}</p>
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById("app"));