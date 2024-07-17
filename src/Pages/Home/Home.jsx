import { React, useState, useEffect, useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import styles from "./Home.module.css";

import { cards } from "../../data";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { AppContext } from "../../context/Context";

export const Home = () => {

  const [current, setCurrent, Modal, setModal, cart, setCart, popup, setPopup] = useContext(AppContext)

  const [loading, setLoading] = useState(true)

  function observerFunc() {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPopup(true);
            observer.unobserve(entry.target);
            setLoading(false)
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );
  
    const emptyProducts = document.querySelector(".empty-products");
  
    observer.observe(emptyProducts);
  }




  useEffect(() => {
    if(loading) {
      observerFunc()
    }
  });

  return (
    <>
      <div className={styles.banner}>
        <div className="container">
          <Banner />
        </div>
      </div>

      <div className={styles.products}>

        <div className="container">
          <h1 style={{fontWeight: 700}}>Популярные товары</h1>
          <div className={styles.products_cont}>
            <div className={styles.product_cards}>
              {cards.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
            <div
              className="empty-products"
              
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
