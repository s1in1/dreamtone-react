import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import {ShoppingBagIcon} from '@heroicons/react/16/solid'
import {HeartIcon} from '@heroicons/react/16/solid'

export const Header = () => {
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
                    <li><Link to={'/'}>Главная</Link></li>
                    <li><Link to={'/'}>Каталог</Link></li>
                    <li><Link to={'/'}>О нас</Link></li>
                </ul>
            </div>

            <div className={styles.header__icons}>
                <button><ShoppingBagIcon className='size-8'/></button>
                <button><HeartIcon className='size-8'/></button>
            </div>
            
        </div>
    </div>
    </div>
    
        
    </>
  )
}
