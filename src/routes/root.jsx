import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { AppContext } from "../context/Context";
import { useState } from "react";
import '../index.css'
import { Footer } from "../Components/Footer/Footer";
import Cart from "../Components/Cart/Cart";
import { Popup } from "../Components/Popup/Popup";

export default function Root() {

    const [current, setCurrent] = useState('Home');
    const [Modal, setModal] = useState(false);
    const [cart, setCart] = useState([])
    const [popup, setPopup] = useState(false);

    return (
      <>
      <AppContext.Provider value={[current, setCurrent, Modal, setModal, cart, setCart, popup, setPopup]}>
      {
        popup ? <Popup/> : ""
      }
      <div className="wrapper">
        {Modal ? <Cart/> : ''}
          <Header/>
            <main className="main">

                    <Outlet/>

            </main>
            <Footer/>
        </div>

      </AppContext.Provider>
        
      </>
    );
  }