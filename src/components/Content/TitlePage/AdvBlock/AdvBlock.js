import React from 'react'
import './AdvBlock.css'
import PropTypes from 'prop-types'

export default function AdvBlock({advBlock}) {
    return (
        <li className='advBlock'>{advBlock}</li>
    )
}

AdvBlock.propTypes = {
    advBlock: PropTypes.string
}