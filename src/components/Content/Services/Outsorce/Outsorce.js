import React from 'react'
import './Outsorce.css'
import HeaderPage from '../../../HeaderPage/HeaderPage'
import {outsorceContent} from '../../../../dataConsts'
import ServicesSection from '../ServicesSection/ServicesSection'

export default function Outsorce () {
    
    const contentPage = outsorceContent.map((contentSection, index)=><ServicesSection key={(index+1)*10} content={contentSection}/>)
    return (
        <section className='Outsorce'>
            <HeaderPage header='Аутсорсинг'/>
            {contentPage}
        </section>
    )
}