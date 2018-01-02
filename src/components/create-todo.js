import React from 'react'
import PropTypes from 'prop-types'

class CreateToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: '',
            errors: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({task: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()

        const {onCreateToDo} = this.props
        const errors = onCreateToDo(this.state.task)
        
        this.setState({errors: errors})
        
        if (errors.length > 0) {
            return
        }

        this.setState({task: ''})
    }

    renderErrors() {
        const errors = this.state.errors
        if (errors.length === 0) {
            return ''
        }
        
        return <ul className="errors">{errors.map(error => <li key={error} className="error">{error}</li>)}</ul>
    }

    render() {
        const {onCreateToDo} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderErrors()}
                <input type="text" onChange={this.handleChange} value={this.state.task} placeholder="what do you want to do"/>
                <button type="submit">Create task</button>
            </form>
        )
    }
}

CreateToDo.propTypes = {
    onCreateToDo:  PropTypes.func.isRequired
}

export default CreateToDo