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
        this.onDeleteTodo = this.onDeleteTodo.bind(this)
        this.validateTodo = this.validateTodo.bind(this)
        this.onTodoSave = this.onTodoSave.bind(this)
    }

    onCreateTodo(task) {
        const errors = this.validateTodo(task);
        if (errors.length) {
            return errors
        }

        this.setState({
            todos: this.state.todos.concat(
                {
                    id: shortid.generate(),
                    task: task,
                    isCompleted: false
                }
            )
        })

        return []
    }

    onDeleteTodo(id) {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    }

    validateTodo(newValue) {
        if (typeof newValue !== 'string') {
            return ['task must be a string']
        }

        if (newValue.length === 0) {
            return ['task can not be empty']
        }

        if (this.checkIfTaskExists(newValue)) {
            return ['given task already exists']
        }

        return []
    }

    onTodoSave(taskId, newValue) {
        const errors = this.validateTodo(newValue);
        if (errors.length) {
            return errors
        }

        this.setState({
            todos: this.state.todos.map(todo => {
                todo.task = (todo.id === taskId ? newValue : todo.task)
                return todo
            })
        })

        return []
    }

    checkIfTaskExists(task) {
        return this.state.todos
            .filter(todo => todo.task === task)
            .length > 0
    }

    render() {
        return (
            <div>
                <h1>React ToDos app</h1>
                <CreateToDo onCreateToDo={this.onCreateTodo} />
                <ToDosList
                    todos = {this.state.todos}
                    onDeleteItem = {this.onDeleteTodo}
                    onTaskSave = {this.onTodoSave}
                />
            </div>
        )
    }
}

export default App