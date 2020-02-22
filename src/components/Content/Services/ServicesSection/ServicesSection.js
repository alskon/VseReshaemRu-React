import React from 'react'
import './ServicesSection.css'
import PropTypes from 'prop-types'

export default function ServicesSection({content}) {

 
    return (
        <section className='SectionServices'>
            <h3>{content.header}</h3>
            <p>{content.paragraph}</p>
            <p>{content.headerList}</p>
            <ul>
                {content.list.map((item, index)=>
                    <React.Fragment key={(index+1)*10}>
                        <li key={(index+1)*10}>{item}</li> <br/> 
                    </React.Fragment>) } 
            </ul>
            <p>{content.footer}</p>
        </section>
    )
} 

ServicesSection.propTypes = {
    content:PropTypes.object
}