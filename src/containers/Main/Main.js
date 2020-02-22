import React from 'react'
import './Main.css'
import {Switch, Route} from 'react-router-dom'
import TitlePage from '../../components/Content/TitlePage/TitlePage'
import About from '../../components/Content/About/About'
import Outsorce from '../../components/Content/Services/Outsorce/Outsorce'
import Consult from '../../components//Content/Services/Consult/Consult'
import LegalServices from '../../components/Content/Services/LegalServices/LegalServices'
import {Contacts} from '../../components/Content/Contacts/Contacts'
import Blog from '../../components/Content/Blog/Blog'

export default class Main extends React.Component {

    render() {
        return(            
            <main>
                <Switch>
                        <Route exact path='/' component={TitlePage} />
                        <Route  path='/blog' component={Blog} />
                        <Route  path='/about' component={About} />
                        <Route  path='/contacts' component={Contacts} />
                        <Route  path='/outsorce' component={Outsorce} />
                        <Route  path='/consult' component={Consult} />
                        <Route  path='/legalservices' component={LegalServices} />    
                    </Switch>  
                </main>            
        )
    }
}