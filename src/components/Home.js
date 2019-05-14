import React, { Component } from 'react'
import { withBeers } from '../context/BeerProvider.js'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            searchBy: '',
            nameInput: '',
            abvInput: '',

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.getBeers(this.state.nameInput)
        this.setState({
            searchBy:'',
            nameInput: "",
            abvInput: '',
        })
        // console.log(this.state.nameInput)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <select name="searchBy" onChange={this.handleChange}>
                        <option value="name">by Name</option>
                        <option value="abv">by ABV</option>
                    </select> */}

                    <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleChange}/>
                    {/* <h1>OR</h1>
                    <input type="number" name="abvInput" value={this.state.abvInput} onChange={this.handleChange}/> */}



                    <button>Submit</button>
                </form>
                <div>
                    { this.props.beers.map(beer => 
                    <div>
                        <h1>NAME: {beer.tagline}</h1> 
                        <p>IMAGE: {beer.image_url}</p>
                        <img src={beer.image_url} alt="image"/>
                        <p>DESC: {beer.description}</p>
                        <p>ABV: {beer.abv}</p>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default withBeers(Home)