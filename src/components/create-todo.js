import React from 'react'
import PropTypes from 'prop-types'

class CreateToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({task: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.onCreateToDo(this.state.task)
    }
    render() {
        const {onCreateToDo} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} placeholder="what do you want to do"/>
                <button type="submit">Create task</button>
            </form>
        )
    }
}

CreateToDo.propTypes = {
    onCreateToDo:  PropTypes.func.isRequired
}

export default CreateToDo