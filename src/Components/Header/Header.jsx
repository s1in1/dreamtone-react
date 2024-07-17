import {React, useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import {ShoppingBagIcon} from '@heroicons/react/16/solid'
import {HeartIcon} from '@heroicons/react/16/solid'
import { AppContext } from '../../context/Context'

export const Header = () => {

    const location = useLocation()

    const [Modal, setModal] = useContext(AppContext)

  return (
    <>
    <div className={styles.header_bgc}>
        <div className="container">
        <div className={styles.header}>
                <div className={styles.header__logo}>
                <Link to={'/'}><img src="../../public/images/logo/logo.svg" alt="logo" /></Link>
            </div>

            <div >
                <ul className={styles.header__links}>
                    <li className={location.pathname === '/' ? styles.active : ''}><Link to={'/'}>Главная</Link></li>
                    <li className={location.pathname === '/catalog' ? styles.active : ''}><Link to={'/catalog'}>Каталог</Link></li>
                    <li className={location.pathname === '/about' ? styles.active : ''}><Link to={'/about'}>О нас</Link></li>
                </ul>
            </div>

            <div className={styles.header__icons}>
                <button onClick={()=> {setModal(true) 
                    console.log(Modal)}}><ShoppingBagIcon className='size-8'/></button>
                
            </div>
            
        </div>
    </div>
    </div>
    
        
    </>
  )
}
