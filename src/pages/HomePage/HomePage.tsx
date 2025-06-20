import ImageGallery from "react-image-gallery";
import image1 from "../../img/praxis-gallery/praxis-1.jpeg";
import image2 from "../../img/praxis-gallery/praxis-2.jpeg";
import image3 from "../../img/praxis-gallery/praxis-3.jpeg";

import './HomePage.css';
import { useEffect, useState } from "react";
import Popup from "../../components/Popup/Popup";

const HomePage = () => {

  const [clickTitleCount, setClickTitleCount] = useState(0);
  const [showCapy, setShowCapy] = useState(false);
  const [popDesktopEnabled, setPopDesktopEnabled] = useState(false);
  const [popMobileEnabled, setPopMobileEnabled] = useState(false);
  const showPopup = popDesktopEnabled && popMobileEnabled;

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

  useEffect(() => {
    // DESKTOP DOCUMENT
    fetch("https://docs.google.com/document/d/e/2PACX-1vQBDy5XvY6XeXrLdG8AXXUUMpqkwfQDOgxXlByOj3H11zElOwlYg9jOJTPuqxmRcPAN8AZfych5m6Hh/pub")
      .then(() => {
        console.log("DESKTOP DOCUMENT PUBLISHED");
        setPopDesktopEnabled(true)   
      })
      .catch((error) => {
        console.log('DESKTOP DOCUMENT ERROR', error);
        setPopDesktopEnabled(false)     
      });

    // MOBILE DOCUMENT
    fetch("https://docs.google.com/document/d/e/2PACX-1vSWjecDpNJrw-t1dKkH7yj8Y4DCEpgH2mvuH1DeI4yXmmqWb8Beu6OSvwOVPzDYiU07lF9Et_gu4i8n/pub")
      .then(() => {
        console.log("MOBILE DOCUMENT PUBLISHED");
        setPopMobileEnabled(true)
      })
      .catch((error) => {
        console.log('MOBILE DOCUMENT ERROR', error);
        setPopMobileEnabled(false)
      });
  }, []);


  const images = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
  ];
  
  return (
    <div className="page-content praxis-content">
      <Popup isPopupEnabled={showPopup} />
      <section className='praxis-image-gallery'>
        <ImageGallery 
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            slideDuration={1000}
            slideInterval={4000} 
        />
      </section>
      <section>
        <p onClick={handleTitleClick}>Liebe Eltern!</p>

        {showCapy && <iframe src="https://giphy.com/embed/Y00mF6fy4LJdDFeN5M" className="capy-gif" title="capy-gif"></iframe>}

        <p>Auf unserer Praxis-Homepage finden Sie umfassende Informationen zu unserem Leistungsspektrum, unseren Sprechzeiten und nützliche Hinweise.</p>

        <p>Wir freuen uns darauf, Ihre Kinder medizinisch betreuen zu dürfen und heißen auch neue Patient/innen herzlich willkommen! Dabei legen wir großen Wert auf eine einfühlsame, vertrauensvolle und zuverlässige Betreuung. Ihre Kinder stehen bei uns im Mittelpunkt – mit Empathie und Fachwissen sorgen wir für die bestmögliche medizinische Versorgung.</p>

        <p>Ihre Zufriedenheit, das Wohl Ihrer Kinder und das Gefühl, sich bei uns gut aufgehoben zu wissen, sind unser höchstes Anliegen. Bei uns haben Sie stets eine feste Ansprechpartnerin als Ärztin.</p>

        <p>Vertrauen Sie auf unsere Expertise und unser Engagement.</p>

        <p>Dr. Carmen Müller & Team</p>

      </section>
    </div>
  )
};

export default HomePage;