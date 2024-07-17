import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cards } from '../../data'
import styles from './Product.module.css'
import { StarIcon } from '@heroicons/react/16/solid'

export const Product = () => {

    function rating (q) {
        for (let index = 0; index <= q; index++) {
            <StarIcon className='size-8'/>
        }
    }

    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        setProduct(cards[id])
    }, [])

    return (
        <>
            <div className={styles.product}>
                <div className='container'>
                    <div className={styles.product_cont}>

                        <div className={styles.product_img}>
                            <img src={product.photo} alt="Picture" />
                        </div>
                        <div className={styles.product_info}>
                            <h1 className={styles.product_name}>{product.name}</h1>
                            <p className={styles.product_rat}>{
                                rating(product.rating)
                            }</p>
                            <p className={styles.product_code}>Артикул: {product.code}</p>
                            <p className={styles.product_desc}>{product.description}</p>
                            <p className={styles.product_price}>{product.price} ₽</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
