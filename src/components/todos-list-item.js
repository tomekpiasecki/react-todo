import React from 'react'
import PropTypes from 'prop-types'

class ToDosListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isBeingEdited: false}

        this.onCancelClick = this.onCancelClick.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
        this.onEditClick = this.onEditClick.bind(this)
    }

    getTaskClasses() {
        return `task ${this.props.isCompleted ? 'completed' : ''}`
    }

    onCancelClick() {
        this.setState({isBeingEdited: false})
    }

    onEditClick() {
        this.setState({isBeingEdited: true})
    }

    onDeleteClick() {
        const {onDeleteHandler, id} = this.props
        if (confirm('Are you sure?') && onDeleteHandler) {
            onDeleteHandler(id)
        }
    }

    renderAcstionsSection() {
        if (this.state.isBeingEdited) {
            return <td className="actions">
                <button onClick={this.onCancelClick}>Cancel</button>
                <button>Save</button>
            </td>
        }
        return <td className="actions">
            <button onClick={this.onEditClick}>Edit</button>
            <button onClick={this.onDeleteClick}>Delete</button>
        </td>
    }

    render() {
        const {task} = this.props

        return (
            <tr>
                <td className={this.getTaskClasses()}>{task}</td>
                {this.renderAcstionsSection()}
            </tr>
        )
    }
}

ToDosListItem.propTypes = {
    task:  PropTypes.string.isRequired,
    id: PropTypes.string,
    isCompleted: PropTypes.bool,
    onDeleteHandler: PropTypes.func
}

ToDosListItem.defaultProps = {
    id: '0',
    isCompleted: false
}

export default ToDosListItem