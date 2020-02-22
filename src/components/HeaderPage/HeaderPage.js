import React from 'react'
import './HeaderPage.css'
import PropTypes from 'prop-types'

export default function HeaderPage({ header }) {
    return (
        <h2 className='HeaderPage'>{header}</h2>
    )
}

HeaderPage.propTypes = {
    header: PropTypes.string
}