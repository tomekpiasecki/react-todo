import React from 'react'
import shortid from 'shortid'
import ToDosListHeader from './todos-list-header'
import ToDosListItem from './todos-list-item'

class ToDosList extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [
                {
                    id: shortid.generate(),
                    task: 'Walk the dog',
                    isCompleted: true
                },
                {
                    id: shortid.generate(),
                    task: 'clean the desk',
                    isCompleted: false
                }
            ]
        }
    }
    render() {
        return (
            <table>
                <ToDosListHeader
                    columns = {['Tasks', 'Actions']}
                />
                <tbody>
                    {this.state.todos.map(todo => 
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

export default ToDosList