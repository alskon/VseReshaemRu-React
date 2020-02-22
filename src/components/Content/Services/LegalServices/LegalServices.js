import React from 'react'
import './LegalServices.css'
import HeaderPage from '../../../HeaderPage/HeaderPage'
import {LegalServicesContent} from '../../../../dataConsts'
import ServicesSection from '../ServicesSection/ServicesSection'

export default function LegalServices () {

    const contentPage = LegalServicesContent.map((contentSection, index)=><ServicesSection key={(index+1)*10} content={contentSection}/>)

    return(
        <section className='LegalServices'>
            <HeaderPage header = 'Юридические услуги'/>
            {contentPage}
        </section>
    )
}