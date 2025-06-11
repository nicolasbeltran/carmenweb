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
          {/* <h2 className="popup-title">Wir machen Urlaub!</h2> */}
          <p className="popup-text">
            Die Praxis bleibt am Freitag, 02.05.25 geschlossen.
          </p>
          <p className="popup-text">
            Vertretung übernimmt freundlicherweise
          </p>
          <p className="popup-text">
            Praxis Dr. Duelli, Keplerstr. 26, Telefon 06221 480890.
          </p>
          <div className="popup-footer">
            <Button className="popup-close-button" onClick={() => setIsOpen(false)}>
              Schließen
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Popup;