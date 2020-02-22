import React from 'react'
import './BlogArticle.css'
import ModalWrapper from '../../../../hoc/ModalWrapper/ModalWrapper'
import PropTypes from 'prop-types'

export function BlogArticle({article, onClick}) {

    const styleArticle = {
        gridArea: 'article' + article.id,
    }
    if  (article.size === 'short') {
            styleArticle.width = '400px'
            styleArticle.padding = '10px'
            styleArticle.img = {width:'400px', height:'200px'}
    } else if (article.size === 'long') {
            styleArticle.width = '900px'
            styleArticle.padding = '15px'
            styleArticle.img = {width:'150px', height:'120px', float:'left'}  
    } else {return}
  
     return (       
         <React.Fragment>
            <article onClick={onClick} className='previewArticle' 
                style = {styleArticle}>
                <img style = {styleArticle.img} alt={article.id + '-logo'} src={article.img}></img>
                <p>{article.preArticle}</p>
            </article>
                   
        </React.Fragment> 
    )
}

BlogArticle.propTypes = {
    onClick: PropTypes.func,
    article: PropTypes.object
}

export function FullArticle ({article, modalArticle, isClose, form}) {
    
    return (
        <ModalWrapper form={form} isClose={isClose}>            
            {modalArticle ?
                <div className='fullArticle'>
                    <article className='currentArticle'>
                        <h3>{article.fullArticle.header}</h3>
                        {article.fullArticle.paragraph.map((paragr, index)=><p key={(index+1)*Math.random()*100}>{paragr}</p>)}
                        <h3>{article.fullArticle.footer}</h3>
                    </article> 
                </div>: ''
                }                
        </ModalWrapper>
    )

}

FullArticle.propTypes = {
    article: PropTypes.object,
    modalArticle: PropTypes.bool,
    isClose: PropTypes.func,
    form: PropTypes.bool
}