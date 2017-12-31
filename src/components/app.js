import React from 'react'
import shortid from 'shortid'
import ToDosList from './todos-list'

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
    }
    render() {
        return (
            <div>
                <h1>React ToDos app</h1>
                <ToDosList todos={this.state.todos} />
            </div>
        )
    }
}

export default App