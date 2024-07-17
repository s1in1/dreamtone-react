import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'

export const Footer = () => {
    return (
        <>
            <div className={styles.footer}>

                <div className='container'>

                    <div className={styles.footer_cont}>

                        <div className={styles.footer_start}>
                            <div className={styles.footer__logo}><img src="../../public/images/logo/logo.svg" alt="logo" /></div>
                            <div className={styles.footer__soc}>
                                <ul className={styles.footer_soc_icons}>
                                    <li className={styles.footer_soc_icon}><img src="../../public/images/icons/vk.svg" alt="vk" /></li>
                                    <li className={styles.footer_soc_icon}><img src="../../public/images/icons/whatsa.svg" alt="whatsapp" /></li>
                                    <li className={styles.footer_soc_icon}><img src="../../public/images/icons/zen.svg" alt="zen" /></li>
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
                                    <li>Корзина</li>
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
                                    <li><Map/></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
