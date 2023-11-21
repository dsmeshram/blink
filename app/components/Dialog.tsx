import React from 'react'

const Dialog = ({ isOpen, onClose, children }) => {
    return (
      <>
        {isOpen && (
          <div className="overlay">
            <div className="dialog">
              <button className="close-button" onClick={onClose}>
                Close
              </button>
              {children}
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Dialog;