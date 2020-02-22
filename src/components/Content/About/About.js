import React from 'react'
import './About.css' 
import {ourMission, ourHistory, ourPersonalGallery} from '../../../dataConsts'
import HeaderPage from '../../HeaderPage/HeaderPage'
import ArticleSection from './ArticleSection/ArticleSection'

export default function About () {

    const getDataParagraph = (data)=>data.map((paragraph, index)=><p key={(index+1)*10}>{paragraph}</p>)   
   
    const ourMissionSection = <ArticleSection header={ourMission.header} data={getDataParagraph(ourMission.data)}/>
    const ourHistorySection = <ArticleSection header={ourHistory.header} data={getDataParagraph(ourHistory.data)}/>
    const ourlGallery = <ArticleSection header={ourPersonalGallery.header} gallery={ourPersonalGallery.images}/>

    return (
        <React.Fragment>
            <HeaderPage header='О нас'/>
            {ourMissionSection}
            {ourHistorySection}
            {ourlGallery}
        </React.Fragment>
    )

}