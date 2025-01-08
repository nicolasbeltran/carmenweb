import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import logo from '../../../src/img/logo.png';
import './LayoutPage.css';
import Footer from "./Footer/Footer";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";
import { useState } from "react";

const Layout = () => {

  const [clickTitleCount, setClickTitleCount] = useState(0);
  const [showCapy, setShowCapy] = useState(false);

  const handleTitleClick = () => {
    setClickTitleCount((prevCount) => prevCount + 1);

    setTimeout(() => {
      setClickTitleCount(0);
    }, 2000);

    if (clickTitleCount + 1 === 10) {
      setShowCapy(true);
      setClickTitleCount(0);
    }
  };

  return (
    <>
      <div className="header">
        {!showCapy && 
          <a href="/">
            <img className="logo" src={logo} alt=""  />
          </a>
        }
        {showCapy && <iframe src="https://giphy.com/embed/Y00mF6fy4LJdDFeN5M" className="capy-gif" title="capy-gif"></iframe>}
        <h1 onClick={handleTitleClick}>
          Kinder- & Jugendarztpraxis <br className="break-title" /> Dr. med. Carmen Müller
        </h1>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
      <div className="sub-footer">
        <Link 
          className="print" 
          to="/about"
          onClick={() => window.scrollTo(0, 0)}>
            Impressum
        </Link>
        <ScrollToTopButton />
      </div>
    </>
  )
};

export default Layout;