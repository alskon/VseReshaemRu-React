import React from 'react'
import './Header.css'
import Navigation from '../../components/Navigation/Navigation'
import EnterForm from './EnterForm/EnterForm'

export default class Header extends React.Component {

    state={
        enterFormShow: false,
        activeNoneEnter:'Войти',
        authTrigger:false        
    }
    openEnterForm = ()=>{
        const enterFormShow = true
        const exitEnter = 'Войти'
        return this.state.activeNoneEnter === 'Войти' ?
            this.setState({enterFormShow}) : this.state.activeNoneEnter === 'Выйти' ?
            this.setState({activeNoneEnter:exitEnter, authTrigger:false}) : ''
    }
    closeEnterForm = (auth)=>{
        const enterFormShow = false
        const activeNoneEnter = 'Выйти'
        if (auth) { 
            this.setState({activeNoneEnter,
                enterFormShow,
                authTrigger:true})        
        } else this.setState({enterFormShow})
    }
    render() {
        const {enterFormShow, activeNoneEnter, authTrigger} = this.state
        return(
            <React.Fragment>
                <header className='mainHeader'>
                    <div className='logoName'>
                        <img src='../../img/logo.jpg' alt='logo'></img>
                        <p>АКГ Аудит-Бюро <br/>
                            <span className='logoDescript'>Бухгалтерское и юридическое сопровождение</span>
                        </p>
                    </div>
                    <Navigation/>
                    <span className='enterUser' onClick={this.openEnterForm}>{activeNoneEnter}</span>
                </header>
                <EnterForm enterFormShow={enterFormShow} isClose={this.closeEnterForm} authTrigger={authTrigger}/>
            </React.Fragment>
        )
    }
}
