import React from 'react'
import './Navigation.css'
import NavigationLink from './NavigationLink/NavigationLink'

export default function Navigation() {

    const navListItem = {main: { id: 1, desc: 'Главная', link: '/'}, services: {id:2, desc: 'Услуги', link:''}, blog: {id:3, desc: 'Блог', link:'/blog'},
        about:{id:4, desc:'О нас', link:'/about'}, contacts:{id:5, desc:'Контакты', link:'/contacts'}
    }
    const navListItemServices = {outsorce:{id:21, desc:'Аутсорсинг', link:'/outsorce'}, consult:{id:22, desc:'Консалтинг', link:'/consult'}, 
        legalservices:{id:23, desc:'Юридические услуги', link:'/legalservices'}
    }

    const navListServices = Object.keys(navListItem).map((item, index)=>{
        return (
            item === 'services' ?
            (<ul className='services' key={(index + 1)*10}>
                    {Object.keys(navListItemServices).map((itemService, index)=> 
                        <li key={(index + 1)*10}><NavigationLink menuListItem={navListItemServices[itemService].desc} link={navListItemServices[itemService].link} /></li>
                        )                    
                    } 
            </ul>) : ''            
        )
    })
    const navList = Object.keys(navListItem).map((item, index)=>{
        return (
            item === 'services' ?
            <li className='servicesTop' key={(index + 1)*10}><span>{navListItem[item].desc}</span>
            {navListServices}</li> : 
            <li key={(index + 1)*10} ><NavigationLink menuListItem={navListItem[item].desc} link={navListItem[item].link}/></li>
        )
    })

    return (
        <nav>
            <ul className='mainNavMenu'>
                {navList}
            </ul>
        </nav>
    )
}