import React, { Component } from 'react'
import './AddWorkout.css';
export class AddWorkout extends Component {
    state = {
        location: '',
        type: '',
        length: ''
    }
    
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addWorkout(this.state.location, this.state.type, this.state.length );
        this.setState({location: '', type:'', length:''});
    }
onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render(){
        return(
            <div className="form">
         <form onSubmit={this.onSubmit} style={{display: 'flex' }}>
            <input 
            type="text"
            name="location"
            placeholder="Add Location"
            value={this.state.location}
            onChange={this.onChange}
            />
            
             <input 
            type="text"
            name="type"
            placeholder="Add type of exercise"
            value={this.state.type}
            onChange={this.onChange}
            />
            
             <input 
            type="text"
            name="length"
            placeholder="Add length of exercise in miles"
            value={this.state.length}
            onChange={this.onChange}
            />
            
            
            <input 
            type="submit"
            value="submit"
            className="btn"
            />
            </form>
            </div>  )
        
    }    
}

export default AddWorkout