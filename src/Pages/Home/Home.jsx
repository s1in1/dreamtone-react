import { React, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import styles from './Home.module.css'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { cards } from '../../data'
import { ProductCard } from '../../Components/ProductCard/ProductCard'

export const Home = () => {

  const [category, setCategory] = useState(false)

  const showCategory = (category) => {
    for (const key in category) {
      console.log(category[key])
    }
  }

  return (
    <>
      <div className={styles.banner}>

        <div className="container">
          <Banner />
        </div>

      </div>

      <div className={styles.products}>

        <div className='container'>

          <div >

            <div>

              <h1>Категории</h1>
              <button onClick={() => setCategory(!category)}><ChevronDownIcon className={category ? `${styles.show} size-8` : 'size-8'} /></button>

            </div>

            <div>
              {
                category ?
                  <div>
                    <ul>
                      <li>Все</li>
                      <li>Гитары</li>
                      <li>Барабаны</li>
                    </ul>
                  </div>
                  :
                  ''
              }
            </div>

          </div>

          <div>

            {
              cards.map((product) => {
                <ProductCard key={product.id} product={product} />
              })
            }

          </div>

        </div>

      </div>



    </>
  )
}
