import React from 'react'
import styles from './Banner.module.css'
import './Banner.css'
import {slides} from '../../data'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {

  return (
    <>
      <div className={styles.banner}>
        
        <div className={styles.slide}>
          <img src="../../../public/images/arrows/prev.svg" alt="" className='custom-prev'/>
          
            <Swiper
              loop = {true}
              modules={[Navigation, A11y]}
              className={styles.slider}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.custom-prev',
                nextEl: '.custom-next',
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              >
                {
                  slides.map((slide, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className={styles.banner}>
                          <button><Link to={'/catalog'}>{slide.name}</Link></button>
                          <img src={slide.photo} alt='картинка' />
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
              <img src="../../../public/images/arrows/next.svg" alt="" className="custom-next"/>
          </div>
                      
      </div>
      
        
    </>
  )
}

export default Banner