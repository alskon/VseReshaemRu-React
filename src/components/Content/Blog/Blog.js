import React from 'react'
import './Blog.css'
import HeaderPage from '../../HeaderPage/HeaderPage'
import {articles} from '../../../dataConsts'
import {BlogArticle, FullArticle} from './BlogArticle/BlogArticle'

export default class Blog extends React.Component {
    state = {
        modalShow: false,
        articleId: 0,
        form: false         
    }
    openModalArticle=(id)=>{
        const currentArticleId = id
        const currentModalShow = true        
        this.setState({
            modalShow: currentModalShow,
            articleId: currentArticleId,
            })
    }   
    closeModalArticle=()=>{
        const modalShow = false
        const articleId = 0
        this.setState({
            modalShow,
            articleId
            })
    }
    render() {
        const {modalShow, articleId, form} = this.state
        let gridTemplateAreas=[];        
        Object.keys(articles).map((article)=> {
            return (articles[article].size === 'long' ? gridTemplateAreas.push(article, article) : articles[article].size === 'short' ?
            gridTemplateAreas.push(article) : '')
            }
        )
        let gridTemplateArea = []
        for (let i=0; i<gridTemplateAreas.length-1; i+=2) gridTemplateArea[i] = gridTemplateAreas[i] + ' ' + gridTemplateAreas[i+1]
        gridTemplateArea = gridTemplateArea.filter((item)=>item)
        gridTemplateArea = `'${gridTemplateArea.join('\' \'')}'`                            
        const blogContent = Object.keys(articles).map((article, index)=> <BlogArticle  
            onClick={()=>this.openModalArticle(index)} key={(index+1)*10} article={articles[article]}/>)
        return(
            <div>
                <HeaderPage header='Полезная информация'/>
                <div className='articleWrapper' style={{gridTemplateAreas:`${gridTemplateArea}`}}>
                    {blogContent}                                       
                </div>
                <div>
                    <FullArticle form={form} isClose={this.closeModalArticle} modalArticle={modalShow} article={articles[Object.keys(articles)[articleId]]} />
                
                </div>
                
            </div>
        )
    }
}
