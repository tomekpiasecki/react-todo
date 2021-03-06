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
        this.onEditClick = this.onEditClick.bind(this)
        this.onSaveClick = this.onSaveClick.bind(this)
        this.onTaskChange = this.onTaskChange.bind(this)
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

    renderAcstionsSection() {
        if (this.state.isBeingEdited) {
            return <td className="actions">
                <button onClick={this.onCancelClick}>Cancel</button>
                <button onClick={this.onSaveClick}>Save</button>
            </td>
        }

        const {onDeleteHandler, id:taskId} = this.props

        return <td className="actions">
            <button onClick={this.onEditClick}>Edit</button>
            <button onClick={onDeleteHandler.bind(this, taskId)}>Delete</button>
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
        const {id:taskId, task, onTaskClick} = this.props

        if (this.state.isBeingEdited) {
            return <td className={this.getTaskClasses()}>
                <input type="text" value={this.state.newValue} onChange={this.onTaskChange}/>
                {this.renderErrors()}
            </td>
        }

        return <td className={this.getTaskClasses()} onClick={onTaskClick.bind(this, taskId)}>{task}</td>
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
    onDeleteHandler: PropTypes.func.isRequired,
    onSaveHandler: PropTypes.func,
    onTaskClick: PropTypes.func.isRequired
}

ToDosListItem.defaultProps = {
    id: '0',
    isCompleted: false
}

export default ToDosListItem