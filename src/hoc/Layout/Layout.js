import React from 'react'
import './Layout.css'

export default class Layout extends React.Component {
    render() {
        return (
            <div className='Layout'>
                {this.props.children}
            </div>
        )
    }
}