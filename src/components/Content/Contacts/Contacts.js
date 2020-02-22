import React from 'react'
import './Contacts.css'
import HeaderPage from '../../HeaderPage/HeaderPage'
import {contactForm} from '../../../dataConsts'
import {databaseRef} from '../../../Firebase/Firebase'

export function Contacts() {

    const contactsSectionContent = contactForm.map((item, index)=> {
        return (
            <li key={(index+1)*10}>                
                <img src={item.icon} alt={item.id+'icon'}></img> {item.paragraph}
            </li>
        )
    })

    return (
        <React.Fragment>
            <HeaderPage header='Контакты'/>
                <section className='ContactsForm'>
                    <ul>
                        {contactsSectionContent}
                    </ul>
                </section>
                <section className='googleMap'>
                    <h3>Карта</h3>
                    <iframe title='gMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.3503227352268!2d44.491764327667084!3d48.73551878590672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb015cbc22df%3A0xc8cc0f2fd9cff71d!2z0YPQuy4g0LjQvC4g0JrQsNGA0LvQsCDQm9C40LHQutC90LXRhdGC0LAsIDIxLCDQktC-0LvQs9C-0LPRgNCw0LQsINCS0L7Qu9Cz0L7Qs9GA0LDQtNGB0LrQsNGPINC-0LHQuy4sIDQwMDEwNw!5e0!3m2!1sru!2sru!4v1558441060477!5m2!1sru!2sru" width="100%" height="450" frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
                </section>
                <section className='CallBackSection'>
                    <h3>Напишите нам:</h3>
                   <CallBack/>
                </section>
        </React.Fragment>
    )
}

class CallBack extends React.Component {

    state = {guestName:'',
        guestEmail:'',
        guestText:'',
        messageSendForm:''
    }

    handleGuestName = (e)=>{
        const guestName = e.target.value
        this.setState ({guestName})
    }
    handleGuestEmail = (e)=>{
        const guestEmail = e.target.value
        this.setState({guestEmail})
    }
    handleGuestText = (e)=>{
        const guestText = e.target.value
        this.setState({guestText})
    }

    handleSendMessage = ()=> {
        const {guestName, guestEmail, guestText} = this.state
        const msgId = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000  
        const successMes = 'Сообщение успешно отправлено'
        const errMes = 'Не все данные заполнены'    
        const errMesEmail = 'Поле Email заполнено некорректно'           
        return (guestName.length > 0 && guestEmail.length > 0 && guestText.length > 0) ? 
        !this.validateEmail(guestEmail) ? this.setState ({messageSendForm:errMesEmail}) :
        (this.writeGuestMessage(guestName, guestEmail, guestText, msgId), this.setState({messageSendForm:successMes})) :
        this.setState({messageSendForm:errMes})
    }
    validateEmail = (eMail) =>{          
        const regValidate = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        return regValidate.test(eMail)
    }
    writeGuestMessage = (name, email, message, msgId) => {
        databaseRef.child('message' + msgId).set({
            username: name,
            email,
            message
        })
    }

    render() {
        const {guestName, guestEmail, guestText, messageSendForm} = this.state

        return(
           <form>
               <div>
                    <label htmlFor='guestName'>Ваше имя:</label>
                    <input id='guestName' type='text' placeholder="Введите ваше имя" 
                        value={guestName} onChange={this.handleGuestName}></input>
               </div>
               <div>
                    <label htmlFor='guestEmail'>Ваш Email</label>
                    <input id='guestEmail' type='email' placeholder="Введите эл. адрес на который мы пришлем ответ" 
                        value={guestEmail} onChange={this.handleGuestEmail}></input>
               </div>
               <div>
                    <label htmlFor="guestText">Ваш вопрос</label>
                    <textarea id='guestText' placeholder="Оставьте свое сообщение" 
                        value={guestText} onChange={this.handleGuestText}></textarea>
                </div> 
                    <div><p> {messageSendForm} </p></div>               
                    <button type='button' onClick={this.handleSendMessage}>Отправить</button>
           </form> 
        )
    }
}
