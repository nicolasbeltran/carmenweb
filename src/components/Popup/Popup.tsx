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

const Popup = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  console.log('Popup isOpen', isOpen);

  
   useEffect(() => {
    const hasOpened = localStorage.getItem(PopupEnum.PopupShown);
    if (!hasOpened) {
      setIsOpen(true);
      localStorage.setItem(PopupEnum.PopupShown, "true");
    }
  }, []);

  return (
    <div className="popup-container">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="popup-dialog">
          <h2 className="popup-title">Kinder- und Jugendarztpraxis</h2>
          <p className="popup-text">
            Die Praxis bleibt vom <strong>10.02.2025</strong> bis zum <strong>14.02.2025</strong> wegen Urlaub geschlossen.
            Ab dem <strong>17.02.2025</strong> sind wir wieder wie gewohnt für Sie da.
          </p>
          <p className="popup-subtitle">In dringenden Fällen vertreten uns folgende Praxen:</p>
          <ul className="popup-list">
            <li className="popup-list-item">
              <strong>Dr. med. Elke Haffelder</strong>
              <br />
              Tel.: 06221/470147
              <br />
              Adresse: Furtwänglerstr. 1
            </li>
            <li className="popup-list-item">
              <strong>Dr. med. Gorning/Voller</strong>
              <br />
              Tel.: 06221/401213
              <br />
              Adresse: Brückenkopfstr. 1/2
            </li>
          </ul>
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