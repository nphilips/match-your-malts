import React, {Component} from 'react'
// import AddUgliesForm from './AddUgliesForm.js'

class FavDrinks extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: props.name,
            description: props.description,
            imgUrl: props.imgUrl,
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            name: this.state.name,
            description: this.state.description,
            imgUrl: this.state.imgUrl,
        }
        this.props.handleEdit(this.props._id, updates)
        // this.toggler()
    }

    render(){
        const { name, description, imgUrl, handleDelete, _id } = this.props

        return(
            <div>
                <div style={{
                        backgroundImage: `url(${imgUrl})`, 
                        border: '1px solid black', 
                        margin: 5, 
                        backgroundPosition: 'center', 
                        backgroundSize: 'cover', 
                        color: 'lightblue', 
                        height: 200}}>
                    <h1>{name}</h1>
                    <h3>{description}</h3>
                    <button onClick={() => handleDelete(_id)} >DELETE</button>
                    <button onClick={this.toggler}>Edit</button>
                </div>
            </div>
        )
    }
}

export default FavDrinks