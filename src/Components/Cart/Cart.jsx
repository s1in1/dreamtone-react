import React from 'react'
import styles from './Cart.module.css'
import {XMarkIcon} from '@heroicons/react/24/solid'
import {useContext} from 'react';
import { AppContext } from '../context/AppContext';


const Cart = () => {

  const [Modal, setModal, cart, setCart]  = useContext(AppContext);

  const deleteFromCart = (id) => {
    const updCart = cart.filter(item => item.id !== id)
    setCart(updCart)
  }

  const Increment = (product) => {
    if(product.quantity < 10) {
      const newCart = cart.map(item => {
        if(item.id === product.id) {
          item.quantity++
        }
        return item
      })
      setCart(newCart)
    }
  }

  const Decrement = (product) => {
    if(product.quantity <= 10 && product.quantity>1 ) {
      const newCart = cart.map(item => {
        if(item.id === product.id) {
          item.quantity--
        }
        return item
      })
      setCart(newCart)
    }
  }

  return (
    <>
        <div className={styles.cart} onClick={(event)=>{
          if(!event.target.closest('.cartModal_list__product_content')){
           setModal(false) 
          }
        }}>
            <div className={`${styles.cartModal} cartModal_list__product_content`}>
              <div className={styles.cartModal__header}>
                <h2>Корзина</h2>
                <button  onClick={()=>setModal(false)} className={styles.cartModal__header_button}>
                  <XMarkIcon className='size-6 text-black'/>
                </button>
              </div>

              <div className={styles.cartModal_list}>
                {
                  cart.map((item)=> {
                    return(
                      <div className={styles.cartModal_list__product} key={item.id}>

                        <div className={styles.cartModal_list__product_content}>
                          <h3>{item.title}</h3>
                          <p>Price: <span>{item.price}$</span> </p>
                          <div className={styles.cartModal__quan}>
                            <span onClick={()=>Increment(item)}>+</span>
                            <p>Quantity: {item.quantity}</p>
                            <span onClick={()=>Decrement(item)}>-</span>
                          </div>
                          
                        </div>

                        <div className={styles.cartModal_list__product_button}>
                          <button onClick={()=>deleteFromCart(item.id)} className={styles.button}><XMarkIcon className='size-6 text-white'/></button>
                        </div>

                      </div>
                    )
                  })
                }

                
                
              </div>
            </div>
        </div>
    </>
  )
}

export default Cart