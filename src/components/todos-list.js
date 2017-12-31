import React from 'react'
import ToDosListHeader from './todos-list-header'

class ToDosList extends React.Component {
    render() {
        return (
            <table>
                <ToDosListHeader
                    columns = {['Tasks', 'Actions']}
                />
                <tbody>
                </tbody>
            </table>
        )
    }
}

export default ToDosList