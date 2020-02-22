import React from 'react'
import './ModalWrapper.css'

export default class ModalWrapper extends React.Component {

    closeModalArticle = ()=>{
        if (!this.props.form) {
            this.props.isClose()          
            document.body.style.overflow = 'auto'             
        }
    }
    render () {
        return(
                <div className='ModalWrapper' style={ this.props.children && !this.props.closeForm ? {display:'block'} : {display:'none'}} onClick={this.closeModalArticle}>
                    {(this.props.children ) ? document.body.style.overflow = 'hidden': ''}
                    {this.props.children}                                        
                </div>
        )
    }
}