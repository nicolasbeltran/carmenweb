import React, { useEffect, useState } from "react";
import "./Popup.css";
import { PopupEnum } from "../../enums/common-enums";
// import { PopupEnum } from "../../enums/common-enums";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="dialog-overlay" onClick={() => onOpenChange(false)}>
      <div
        className="dialog-content"
        onClick={(e) => e.stopPropagation()} // Prevent close on content click
      >
        {children}
      </div>
    </div>
  );
};

interface ButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

type Props = {
  isPopupEnabled: boolean;
}

const Popup = (props: Props) => {
  const { isPopupEnabled } = props;
  
  const [isOpen, setIsOpen] = useState(false);

  console.log('Popup isOpen', isOpen);

  
   useEffect(() => {
    const hasOpened = localStorage.getItem(PopupEnum.PopupShown);
    if (isPopupEnabled && !hasOpened) {
      setIsOpen(true);
      localStorage.setItem(PopupEnum.PopupShown, "true");
    }
  }, []);

  return (
    <div className="popup-container">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="popup-dialog">

          {/* START POPUP - SAFE TO EDIT */}

          <h2 className="popup-title">Die Kinder- und Jugendarztpraxis Dr. med. Carmen Müller</h2>
          
          <p className="popup-date">
            bleibt vom <span className="popup-highlight">20.06.</span> bis zum <span className="popup-highlight">04.07.2025</span> wegen Urlaub geschlossen.
          </p>
          
          <p className="popup-date">
            Ab dem <span className="popup-highlight">07.07.2025</span> sind wir wieder wie gewohnt für Sie da.
          </p>
          
          <div className="popup-divider"></div>
          
          <p className="popup-subtitle">
            In dringenden Fällen vertreten uns folgende Praxen:
          </p>
          
          <div className="popup-columns">
            <div className="popup-column">
              <p className="popup-date-small">Am 20.06.25</p>
              <p className="popup-doctor"><strong>Dres med. Duelli/Springer</strong></p>
              <p className="popup-address">Keplerstraße 26</p>
              <p className="popup-address">69120 Heidelberg</p>
              <p className="popup-address">Tel: 480890</p>
            </div>
            
            <div className="popup-column-divider"></div>
            
            <div className="popup-column gorning">
              <p className="popup-date-small">Ab dem 23.06.–04.07.25</p>
              <p className="popup-doctor"><strong>Dr. med. Gorning</strong></p>
              <p className="popup-address">Brückenkopfstr. 1/2,</p>
              <p className="popup-address">69120 Heidelberg</p>
              <p className="popup-address">Tel: 401213</p>
            </div>
                        
            <div className="popup-column">
              <p className="popup-doctor haffelder"><strong>Dr. med. Haffelder</strong></p>
              <p className="popup-address">Furtwänglerstraße 1</p>
              <p className="popup-address">69121 Heidelberg</p>
              <p className="popup-address">Tel: 470147</p>
            </div>
          </div>
          
          <div className="popup-footer">
            <Button className="popup-close-button" onClick={() => setIsOpen(false)}>
              Schließen
            </Button>
          </div>

          {/* END POPUP - SAFE TO EDIT */}
          
        </div>
      </Dialog>
    </div>
  );
};

export default Popup;
