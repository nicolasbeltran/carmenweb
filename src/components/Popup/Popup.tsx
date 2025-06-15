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
  
   useEffect(() => {
    const hasOpened = localStorage.getItem(PopupEnum.PopupShown);

    if (isPopupEnabled && !hasOpened) {
      setIsOpen(true);
      localStorage.setItem(PopupEnum.PopupShown, "true");
    }
  }, [isPopupEnabled]);

  return (
    <div className="popup-container">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="popup-dialog">

            <iframe className="iframe-desktop" src={`https://docs.google.com/document/d/e/2PACX-1vQBDy5XvY6XeXrLdG8AXXUUMpqkwfQDOgxXlByOj3H11zElOwlYg9jOJTPuqxmRcPAN8AZfych5m6Hh/pub?embedded=true&rand=${Date.now()}`}></iframe>

            <iframe className="iframe-mobile" src={`https://docs.google.com/document/d/e/2PACX-1vSWjecDpNJrw-t1dKkH7yj8Y4DCEpgH2mvuH1DeI4yXmmqWb8Beu6OSvwOVPzDYiU07lF9Et_gu4i8n/pub?embedded=true&rand=${Date.now()}`}></iframe>

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
