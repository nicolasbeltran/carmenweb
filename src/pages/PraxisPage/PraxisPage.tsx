import ImageGallery from "react-image-gallery";
import image1 from "../../img/praxis-gallery/praxis-1.jpeg";
import image2 from "../../img/praxis-gallery/praxis-2.jpeg";
import image3 from "../../img/praxis-gallery/praxis-3.jpeg";

import './PraxisPage.css';

const PraxisPage = () => {

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
        <p>Liebe Eltern!</p>

        <p>Auf unserer Praxis-Homepage finden Sie umfassende Informationen zu unserem Leistungsspektrum, unseren Sprechzeiten und nützliche Hinweise.</p>

        <p>Wir freuen uns darauf, Ihre Kinder medizinisch betreuen zu dürfen und heißen auch neue Patient/innen herzlich willkommen! Dabei legen wir großen Wert auf eine einfühlsame, vertrauensvolle und zuverlässige Betreuung. Ihre Kinder stehen bei uns im Mittelpunkt – mit Empathie und Fachwissen sorgen wir für die bestmögliche medizinische Versorgung.</p>

        <p>Ihre Zufriedenheit, das Wohl Ihrer Kinder und das Gefühl, sich bei uns gut aufgehoben zu wissen, sind unser höchstes Anliegen. Bei uns haben Sie stets eine feste Ansprechpartnerin als Ärztin.</p>

        <p>Vertrauen Sie auf unsere Expertise und unser Engagement.</p>

        <p>Dr. Carmen Müller <br/>
        & Team</p>

        <p>Wir bitten Sie weiterhin nur nach telefonischer Terminvereinbarung in die Praxis zu kommen.</p>

        <p>Falls Sie oder Ihr Kind grippale Symptome haben, bitten wir Sie, vor dem Praxisbesuch einen Coronatest durchzuführen und sich im positiven Fall zunächst telefonisch bei uns zu melden. Danke für Ihr Verständnis!</p>
      </section>
    </div>
  )
};

export default PraxisPage;