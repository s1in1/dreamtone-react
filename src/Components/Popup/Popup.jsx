import React from 'react'
import styles from './Popup.module.css'
import { AppContext } from '../../context/Context'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/16/solid'

export const Popup = () => {
    const [current, setCurrent, Modal, setModal, cart, setCart, popup, setPopup] = useContext(AppContext)
  return (
    <>
        <div className={styles.popup}>
            <div className={styles.popup_window}>
                <div className={styles.popup_content}>

                    <a href="https://ya.ru">Переходи к партнерам</a>
                    <span onClick={() => setPopup(false)} className={styles.popupContentClose}><XMarkIcon className='size-6 cursor-pointer'/></span>
                    
                </div>

                <div className={styles.popup_btn}>
                    <form action="https://ya.ru">
                      <button>Нажми сюда</button>  
                    </form>
                    
                </div>
                
            </div>
        </div>
    </>
  )
}
