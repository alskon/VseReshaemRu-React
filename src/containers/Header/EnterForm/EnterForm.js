import React from 'react'
import './EnterForm.css'
import ModalWrapper from '../../../hoc/ModalWrapper/ModalWrapper'
import {database} from '../../../Firebase/Firebase'
import PropTypes from 'prop-types'

export default class EnterForm extends React.Component {

    state = {form: true, 
            closeForm: this.props.enterFormShow,
            loginUser:'',
            passwordUser:'',
            triggerAuth:false,
            messageAuth:''}
    
    handleInputLogin = (e)=> {
        const loginUser = e.target.value.trim()
        this.setState ({loginUser})        
    }
    handleInputPassword = (e)=> {
        const passwordUser = e.target.value.trim()
        this.setState ({passwordUser})
    }
    handleCloseForm = ()=>{
        const closeForm = true
        this.setState({closeForm,
            messageAuth:'',
            loginUser:'',
            passwordUser:'',
        })
        this.props.isClose(this.state.triggerAuth)
        document.body.style.overflow = 'auto'
    }
    handleOpenForm = ()=>{
        const closeForm = false
        this.setState({closeForm})
    }

    static getDerivedStateFromProps (props, state) { 
        const triggerAuth = props.authTrigger   
        const closeForm = props.enterFormShow                
            return (
                {closeForm: !closeForm, triggerAuth: (state.triggerAuth&&state.triggerAuth!==triggerAuth) ? true : false}
            )
    }
    
    handleAuthFB = ()=> {
        database.ref('users/admin/login').once('value').then((snapshotL)=> {
            const login=snapshotL.val()
            database.ref('users/admin/password').once('value').then((snapshotP)=> {
                const pass=snapshotP.val()
                 if(this.state.loginUser===login && this.state.passwordUser===pass) {
                      const triggerAuth=true 
                      this.setState({triggerAuth}, setMessage)  
                    } else {
                        const messageAuth = 'Неверные данные'
                        this.setState({messageAuth})
                    }                   
            })                     
        })        
        const setMessage = ()=> {
            if(this.state.triggerAuth) {
                const messageAuth = 'Welcome, admin'
                this.setState({messageAuth})
                setTimeout (this.handleCloseForm, 1500)
                }             
        }        
    }        
    render() {
        const {form, closeForm, loginUser, passwordUser, messageAuth} = this.state
        const {enterFormShow, isClose, authTrigger} = this.props
        return (
            <React.Fragment>
                {enterFormShow && !authTrigger ? (
                    <ModalWrapper isClose={isClose} form={form} closeForm={closeForm}>
                        <div className='ModalEnterForm'>
                            <form>
                                <span className="closeEnterForm" onClick={this.handleCloseForm}>&times;</span>
                                <h3>Введите данные:</h3>            
                                <label htmlFor='loginUser'>Логин:</label>
                                <input id='loginUser' onChange={this.handleInputLogin} value={loginUser}/> <br/>
                                <label htmlFor='loginPassword'>Пароль:</label>
                                <input type='password' id='loginPassword' onChange={this.handleInputPassword} value={passwordUser}/> <br/>
                                <button className='close-modal-enter-user-but-enter' type='button' onClick={this.handleAuthFB}>Войти!</button>
                                <p>{messageAuth}</p>
                            </form>
                        </div>
                    </ModalWrapper>) : ''}
            </React.Fragment>
        )
    }
}

EnterForm.propTypes = {
    enterFormShow: PropTypes.bool,
    isClose: PropTypes.func,
    authTrigger: PropTypes.bool,
}