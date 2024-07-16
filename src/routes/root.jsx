import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { AppContext } from "../context/Context";
import { useState } from "react";
import '../index.css'

export default function Root() {

    const [current, setCurrent] = useState('Home');
    const [Modal, setModal] = useState(false);
    const [cart, setCart] = useState([])

    return (
      <>
      <AppContext.Provider value={[current, setCurrent, Modal, setModal, cart, setCart]}>

      <div className="wrapper">
          <Header/>
            <main className="main">
              
                
                    <Outlet/>
                
            </main>
        </div>

      </AppContext.Provider>
        
      </>
    );
  }