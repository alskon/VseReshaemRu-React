import React from 'react'
import './Footer.css'

export default function Footer () {
    const socialObjects = {instagram: {id:1, img:'../../img/icon_instagram.png', link:'https://www.instagram.com/vsereshaem/', className:'socialLinkInst'},
                        VK:{id:2, img:'../../img/icon_vk.png', link:'https://vk.com/public182579912', className:'socialLinkVK'}
                    }
    const socialLinks = Object.keys(socialObjects)
                        .map((socialLink, index)=>{ 
                            return (
                            <li key={(index+1) * 10} className={socialObjects[socialLink].className}><a href={socialObjects[socialLink].link}>
                                <img className='socialLinkImg' src={socialObjects[socialLink].img} alt={socialLink}></img></a></li>
                            )
                        })
    return (
        <footer className='mainFooter'>
            <p>2019, АКГ "Аудит-Бюро", vr@abaf.ru <br/>
            +7 (8442) 366767; +7 (8442) 367474</p>            
            <ul className='socialLink'>
                {socialLinks}
            </ul>
            <p>Разработано: AlSKon</p>
        </footer>
    )
}