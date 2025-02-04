import {React, useState, useContext} from 'react'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/Context';


export const ProductCard = ({product}) => {

const [current, setCurrent, Modal, setModal, cart, setCart] = useContext(AppContext);

const check = (id)=>{
    return cart.find(item => item.id === id)
}

const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id)
    if(!exists){

        const newCart = [
            ...cart,
            {
                ...product,
                quantity:1,
            }
        ]
        
        setCart(newCart)  
    }
        
}

  return (
    <>
        <div className={styles.product}>

            <div className={styles.product_header}>
                <img src={product.photo} alt="" />
                <h2><Link to={`/products/${product.id}`}>{product.name}</Link></h2>            
            </div>

            <div className={styles.product_footer}>
                <p>{product.price} ₽</p>
                {!check(product.id) ? <button onClick={()=> addToCart(product)} className={styles.product_btn}>Добавить в корзину</button>
                : <button onClick={()=> addToCart(product)} className={`${styles.product_btn} ${styles.added}`}>В корзине</button> }
            </div>


        </div>
        
    </>
  )
}