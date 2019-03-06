import React, {Component} from 'react';
class AddForm extends Component {
    state={
        name:"",
        contact:""
    }
    clickHandler=event=>{
        console.log(this.state);
        this.props.onSave(this.state);
        this.setState({name:"",contact:""})
    }
    onchangeHandler=event=>{
        this.setState({
            [event.target.id]:event.target.value
        });
    }
    render(){
        return(
            <div>
                <input onChange={this.onchangeHandler} type="text" id="name" value={this.state.name}/>
                <input onChange={this.onchangeHandler} type="number" id="contact" value={this.state.contact}/>
                <button onClick={this.clickHandler}>Save</button>
            </div>
        )
    }
}
export default AddForm;