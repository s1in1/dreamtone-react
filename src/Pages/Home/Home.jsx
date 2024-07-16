import React from 'react'
import Banner from '../../Components/Banner/Banner'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <>
      <div className={styles.banner}>

       <div className="container">
         <Banner/>
       </div>
 
      </div>


    </>
  )
}
