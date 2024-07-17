import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import MyMap from '../Map/Map'
import { AppContext } from '../../context/Context'

export const Footer = () => {

    const [current, setCurrent, Modal, setModal, cart, setCart] = useContext(AppContext);

    return (
        <>
            <div className={styles.footer}>

                <div className='container'>

                    <div className={styles.footer_cont}>

                        <div className={styles.footer_start}>
                            <div className={styles.footer__logo}><img src="../../public/images/logo/logo.svg" alt="logo" /></div>
                            <div className={styles.footer_soc}>
                                <h1>Социальные сети</h1>
                                <ul className={styles.footer_soc_icons}>
                                    <li className={styles.footer_soc_icon}><a href="https://vk.com/"><img src="../../public/images/icons/vk.svg" alt="vk" /></a></li>
                                    <li className={styles.footer_soc_icon}><a href="https://www.whatsapp.com/?lang=ru_RU"><img src="../../public/images/icons/whatsa.svg" alt="whatsapp" /></a></li>
                                    <li className={styles.footer_soc_icon}><a href="https://dzen.ru/"><img src="../../public/images/icons/zen.svg" alt="zen" /></a></li>
                                </ul>
                                <p>+7 909 234 34 44</p>
                            </div>
                        </div>

                        <div className={styles.footer_sections}>
                            <div className={styles.section}>
                                <ul>
                                    <li><h2>Страницы</h2></li>
                                    <li><Link to={'/'}>Главная</Link></li>
                                    <li><Link to={'/catalog'}>Каталог</Link></li>
                                    <li style={{cursor: 'pointer'}} onClick={()=>setModal(true)}>Корзина</li>
                                </ul>
                            </div>

                            <div className={styles.section}>
                                <ul>
                                    <li><h2>Помощь</h2></li>
                                    <li>FAQ</li>
                                    <li>Горячая линия</li>
                                    <li>Политика конфиденциальности</li>
                                </ul>
                            </div>

                            <div className={styles.section}>
                                <ul>
                                    <li><h2>Компания</h2></li>
                                    <li>О нас</li>
                                    <li>Вакансии</li>
                                    <li>Бренды</li>
                                </ul>
                            </div>

                            <div className={styles.section}>
                                <ul>
                                    <li><h2>Мы здесь</h2></li>
                                    <li><div className={styles.section_map}><MyMap /></div></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
