import React from 'react'
import './Consult.css'
import HeaderPage from '../../../HeaderPage/HeaderPage'
import ServicesSection from '../ServicesSection/ServicesSection'
import {consultContent} from '../../../../dataConsts'

export default function Consult() {

    const contentPage = consultContent.map((contentSection, index)=> <ServicesSection key={(index+1)*10} content={contentSection} />)

    return (
        <section className='Consult'>
            <HeaderPage header='Консалтинг'/>
            {contentPage}

        </section>
    )
}