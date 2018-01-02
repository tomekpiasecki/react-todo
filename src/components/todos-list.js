import React from 'react'
import PropTypes from 'prop-types'
import ToDosListHeader from './todos-list-header'
import ToDosListItem from './todos-list-item'

class ToDosList extends React.Component {
    onDeleteItem(taskId) {
        const {onDeleteItem} = this.props

        if (onDeleteItem) {
            onDeleteItem(taskId)
        }
    }

    onTaskClick(taskId) {
        const {onTaskClick} = this.props

        if (onTaskClick) {
            onTaskClick(taskId)
        }
    }

    onTaskSave(taskId, newValue) {
        const {onTaskSave} = this.props

        if (onTaskSave) {
            return onTaskSave(taskId, newValue)
        }

        return []
    }

    renderItems() {
        return this.props.todos.map(todo => 
            <ToDosListItem
                key = {todo.id}
                onDeleteHandler = {this.onDeleteItem.bind(this)}
                onSaveHandler = {this.onTaskSave.bind(this)}
                onTaskClick = {this.onTaskClick.bind(this)}
                {...todo}
            />
        )
    }

    render() {
        return (
            <table>
                <ToDosListHeader
                    columns = {['Tasks', 'Actions']}
                />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}

ToDosList.protoTypes - {
    todos: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func,
    onTaskClick: PropTypes.func,
    onTaskSave: PropTypes.func
}

export default ToDosList