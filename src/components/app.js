import React from 'react'
import shortid from 'shortid'
import ToDosList from './todos-list'
import CreateToDo from './create-todo'

const todos = [
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

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos
        }

        this.onCreateTodo = this.onCreateTodo.bind(this)
    }
    onCreateTodo(task) {
        this.setState({
            todos: this.state.todos.concat(
                {
                    id: shortid.generate(),
                    task: task,
                    isCompleted: false
                }
            )
        })
    }
    render() {
        return (
            <div>
                <h1>React ToDos app</h1>
                <CreateToDo onCreateToDo={this.onCreateTodo} />
                <ToDosList todos={this.state.todos} />
            </div>
        )
    }
}

export default App