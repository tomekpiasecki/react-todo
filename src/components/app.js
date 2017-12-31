import React from 'react'
import ToDosList from './todos-list'

const todos = [
    {
        task: 'Walk the dog',
        isCompleted: true
    },
    {
        task: 'clean the desk',
        isCompleted: false
    }
]

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React ToDos app</h1>
                <ToDosList />
            </div>
        )
    }
}

export default App