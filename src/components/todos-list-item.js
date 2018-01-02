import React from 'react'
import PropTypes from 'prop-types'

class ToDosListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isBeingEdited: false,
            newValue: '',
            errors: []
        }

        this.onCancelClick = this.onCancelClick.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
        this.onEditClick = this.onEditClick.bind(this)
        this.onSaveClick = this.onSaveClick.bind(this)
        this.onTaskChange = this.onTaskChange.bind(this)
        this.onTaskClick = this.onTaskClick.bind(this)
    }

    getTaskClasses() {
        return `task ${this.props.isCompleted ? 'completed' : ''}`
    }

    onCancelClick() {
        this.setState({isBeingEdited: false})
    }

    onEditClick() {
        this.setState({
            isBeingEdited: true,
            newValue: this.props.task
        })
    }

    onDeleteClick() {
        const {onDeleteHandler, id} = this.props
        if (confirm('Are you sure?') && onDeleteHandler) {
            onDeleteHandler(id)
        }
    }

    onSaveClick() {
        const {onSaveHandler, id:taskId} = this.props
        const {newValue} = this.state
        let errors = []

        if (onSaveHandler) {
            errors = onSaveHandler(taskId, newValue)
            this.setState({errors: errors})
        }

        if (errors.length > 0) {
            return
        }
        
        this.setState({isBeingEdited: false})
    }

    onTaskChange(e) {
        this.setState({newValue: e.target.value})
    }

    onTaskClick(e) {
        const {id, onTaskClick} = this.props

        e.preventDefault()
        if (onTaskClick) {
            onTaskClick(id)
        }
    }

    renderAcstionsSection() {
        if (this.state.isBeingEdited) {
            return <td className="actions">
                <button onClick={this.onCancelClick}>Cancel</button>
                <button onClick={this.onSaveClick}>Save</button>
            </td>
        }

        return <td className="actions">
            <button onClick={this.onEditClick}>Edit</button>
            <button onClick={this.onDeleteClick}>Delete</button>
        </td>
    }

    renderErrors() {
        const errors = this.state.errors
        if (errors.length === 0) {
            return ''
        }
        
        return <ul className="errors">{errors.map(error => <li key={error} className="error">{error}</li>)}</ul>
    }

    renderTask() {
        const {task} = this.props

        if (this.state.isBeingEdited) {
            return <td className={this.getTaskClasses()}>
                <input type="text" value={this.state.newValue} onChange={this.onTaskChange}/>
                {this.renderErrors()}
            </td>
        }

        return <td className={this.getTaskClasses()} onClick={this.onTaskClick}>{task}</td>
    }

    render() {
        return (
            <tr>
                {this.renderTask()}
                {this.renderAcstionsSection()}
            </tr>
        )
    }
}

ToDosListItem.propTypes = {
    task:  PropTypes.string.isRequired,
    id: PropTypes.string,
    isCompleted: PropTypes.bool,
    onDeleteHandler: PropTypes.func,
    onSaveHandler: PropTypes.func,
    onTaskClick: PropTypes.func
}

ToDosListItem.defaultProps = {
    id: '0',
    isCompleted: false
}

export default ToDosListItem