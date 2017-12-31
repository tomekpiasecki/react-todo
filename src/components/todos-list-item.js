import React from 'react'
import PropTypes from 'prop-types'

class ToDosListItem extends React.Component {
    getTaskClasses() {
        return `task ${this.props.isCompleted ? 'completed' : ''}`
    }
    render() {
        const {task} = this.props

        return (
            <tr>
                <td className={this.getTaskClasses()}>{task}</td>
                <td className="actions">{task} - actions</td>
            </tr>
        )
    }
}

ToDosListItem.propTypes = {
    task:  PropTypes.string.isRequired,
    isCompleted: PropTypes.bool
}

ToDosListItem.defaultProps = {
    isCompleted: false
}

export default ToDosListItem