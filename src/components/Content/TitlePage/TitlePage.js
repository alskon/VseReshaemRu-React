import React from 'react'
import './TitlePage.css'
import  {advPhrases, servicesLinks} from '../../../dataConsts'
import AdvBlock from './AdvBlock/AdvBlock'
import {Link} from 'react-router-dom'

export default function TitlePage () {
    
    const advListBlocks = Object.keys(advPhrases)
    .map((phrase, index)=> <AdvBlock key={(index + 1)*10} advBlock={advPhrases[phrase]}></AdvBlock>)

    const servLinksBlocks = Object.keys(servicesLinks)
    .map((serviceLink, index)=><Link key={(index + 1)*10} to={servicesLinks[serviceLink].link}>{servicesLinks[serviceLink].text}</Link>)
    
    return (
        <React.Fragment>
            <section>
                <img className='mainTheme' src='../../../img/main-theme.jpg' alt='main theme'></img>
                <h2>Решение проблем в бухгалтерской, налоговой, юридической и финансовой областях</h2>
                <ul className='mainContent'>{advListBlocks}</ul>
            </section>
            <section className='mainSectionServices'>
                <h3>Виды оказываемых услуг</h3>
                <div className='mainSectionServicesWrapper'>{servLinksBlocks}</div>
            </section>              
        </React.Fragment>
        
    )
}