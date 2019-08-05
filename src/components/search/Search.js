import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            filterText:"",
        }
    }

    handleChange=(e)=> {
        this.setState({
            filterText: e.target.value
        })
      }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.onFilterTextChange(this.state.filterText);
    }
    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input  onChange={this.handleChange} name="filterText" placeholder="Search you need" type="text"/>
                    <button type="submit">Search</button>
                </form>
                
            </div>
        );
    }
}

export default Search;