import React from 'react'
import './NavigationLink.css'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

export default function NavigationLink ({menuListItem, link}) {
    
    return (
        <React.Fragment>
            <NavLink exact to={link} className='NavigationLink' activeClassName='activeLink'>{menuListItem}</NavLink>
        </React.Fragment>
    )
}

NavigationLink.propTypes = {
    menuListItem: PropTypes.string,
    link:PropTypes.string
}