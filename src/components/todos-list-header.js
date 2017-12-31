import React from 'react'
import PropTypes from 'prop-types'

class ToDosListHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map((column, index) =>
                        <th key={'column_' + index}>{column}</th>
                    )}
                </tr>
            </thead>
        )
    }
}

ToDosListHeader.propTypes = {
    columns:  PropTypes.array
}

ToDosListHeader.defaultProps = {
    columns: []
}

export default ToDosListHeader