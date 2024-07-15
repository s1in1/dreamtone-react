import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import '../index.css'

export default function Root() {
    return (
      <>
        <div className="wrapper">
          <Header/>
            <main className="main">
              
                <div className="container">
                    <Outlet/>
                </div>
            </main>
        </div>
      </>
    );
  }