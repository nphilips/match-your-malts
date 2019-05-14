import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    const { navToggle, toggler } = props
    return (
        <div onClick={toggler} className={`nav nav-${navToggle ? "open" : "closed" }`}>
            <Link to="/">Home</Link>
            <Link to="/drinkFinder">Drink Finder</Link>
            <Link to="/favDrinks">Favorite Drinks</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Nav