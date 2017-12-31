import React from 'react'
import PropTypes from 'prop-types'
import ToDosListHeader from './todos-list-header'
import ToDosListItem from './todos-list-item'

class ToDosList extends React.Component {
    renderItems() {
        return this.props.todos.map(todo => 
            <ToDosListItem
                key = {todo.id}
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
    todos: PropTypes.array.isRequired
}

export default ToDosList