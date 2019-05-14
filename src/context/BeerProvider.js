import React, { Component } from 'react'
import axios from 'axios'

const BeerContext = React.createContext()

class BeerProvider extends Component {
     constructor(){
        super()
        this.state = {
            beers: []
        }
     }

    getBeers = (beerInput) => {
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${beerInput}`)
            .then(res => {
                this.setState({
                    beers: res.data
                })
            })
        .catch(err => console.log(err))
    }

     render(){
         return (
             <BeerContext.Provider
                value={{
                    getBeers: this.getBeers,
                    beers: this.state.beers
                }}>
                { this.props.children }
             </BeerContext.Provider>
         )
     }
}

export default BeerProvider


// HOC
export const withBeers = C => props => (
    <BeerContext.Consumer>
        {value => <C {...props} {...value}/>}
    </BeerContext.Consumer>
)
