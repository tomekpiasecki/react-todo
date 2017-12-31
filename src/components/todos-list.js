import React from 'react'
import ToDosListHeader from './todos-list-header'

class ToDosList extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [
                {
                    task: 'Walk the dog',
                    isCompleted: true
                },
                {
                    task: 'clean the desk',
                    isCompleted: false
                }
            ]
        }
    }
    getTaskClasses(todo) {
        return `task ${todo.isCompleted ? 'completed' : ''}`
    }
    render() {
        return (
            <table>
                <ToDosListHeader
                    columns = {['Tasks', 'Actions']}
                />
                <tbody>
                    {this.state.todos.map((todo, index) => 
                        <tr key={'todo_' + index}>
                            <td className={this.getTaskClasses(todo)}>{todo.task}</td>
                            <td className="actions">{todo.task} - actions</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

export default ToDosList