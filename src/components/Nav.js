import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { Data } from './data';
import './Nav.css';
import { IconContext } from 'react-icons';

const Nav = () => {
    const [sidebar,setSidebar]=useState(false)
    const showSidebar =()=>setSidebar(!sidebar)
return (
    <>
    <IconContext.Provider value={{color:'hsl(185, 75%, 31%)'}}>
        <div className="nav">
            <Link to='#' className='menubars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'navmenu active': 'navmenu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menubars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {Data.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName} >
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                    )
                    
                })}
            </ul>
        </nav>
    </IconContext.Provider>
    </>
)
}
