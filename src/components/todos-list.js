import React from 'react'
import PropTypes from 'prop-types'
import ToDosListHeader from './todos-list-header'
import ToDosListItem from './todos-list-item'

class ToDosList extends React.Component {
    render() {
        return (
            <table>
                <ToDosListHeader
                    columns = {['Tasks', 'Actions']}
                />
                <tbody>
                    {this.props.todos.map(todo => 
                        <ToDosListItem
                            task = {todo.task}
                            isCompleted = {todo.isCompleted}
                            key = {todo.id}
                        />
                    )}
                </tbody>
            </table>
        )
    }
}

ToDosList.protoTypes - {
    todos: PropTypes.array.isRequired
}

export default ToDosList