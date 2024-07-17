import React from "react";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/Context";
import { cards } from "../../data";
import styles from './Catalog.module.css'

export const Catalog = () => {
  const [current, setCurrent, Modal, setModal, cart, setCart, popup, setPopup] = useContext(AppContext);

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')

  const [loading, setLoading] = useState(true);

  function observerFunc() {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPopup(true);
            observer.unobserve(entry.target);
            setLoading(false);
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
    if (loading) {
      observerFunc();
    }

    let filteredProductsArray = products;
    if (search.length > 0) {
      filteredProductsArray = filteredProductsArray.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sort !== "") {
      filteredProductsArray = filteredProductsArray.slice().sort((a, b) => {
        if (sort === "asc") {
          return a.price - b.price;
        } else if (sort === "desc") {
          return b.price - a.price;
        }
        return 0;
      });
    }
    if (search.length === 0 && sort === "") {
      filteredProductsArray = products;
    }
    setFilteredProducts(filteredProductsArray);
  }, [products, search, sort]);

  return (
    <>
      <div className={styles.products}>
      
        <div className={styles.filter}>
          <input
            type="text"
            placeholder="Поиск товаров по названию"
            onChange={(event) => setSearch(event.target.value)}
          />
          <select onChange={(event) => setSort(event.target.value)}>
            <option value={""}>Сортировка по цене</option>
            <option value={"asc"}>По возрастанию</option>
            <option value={"desc"}>По убыванию</option>
          </select>
        </div>
        <div className={styles.products__list}>
          {filteredProducts.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>

      <div className="empty-products"></div>
    </>
  );
};
