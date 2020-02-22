import React from 'react'
import './ArticleSection.css'
import PropTypes from 'prop-types'

export default function ArticleSection ({header, data, gallery}) {

    const renderDiv = data ? 
    <div>{data}</div> : 
    gallery ? 
    <ul className='ourPersonalGallery' style={{gridTemplateRows: `repeat(${Math.ceil(gallery.length / 5)}, 1fr)`}}>
        {gallery.map((image, index)=>{
            return (
                <li key={(index+1)*10}>
                    <img alt={image.id} src={image.img}></img>
                    <p>{image.descript}</p>
                </li>
            )
        })}
    </ul> :''
    
    return (
        <section className='ArticleSection'>
            <h3>{header}</h3>
            <div>{renderDiv}</div>
        </section>
    )
}

ArticleSection.propTypes = {
    header: PropTypes.string,
    data: PropTypes.array,
    gallery: PropTypes.array
}