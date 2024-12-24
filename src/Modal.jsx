import React, { useEffect, useState } from "react";

const Popup = ({ setAccepted, setShowPopup }) => {
  function handleSubmit(e) {
    setAccepted(true);
    setShowPopup(false);
  }
  function handleOutsideClick(e) {
    if (e.target.className === "popup-container") setShowPopup(false);
  }
  return (
    <div className="popup-container" onClick={handleOutsideClick}>
      <div className="popup-div">
        <div className="close">
          <button onClick={() => setShowPopup((prev) => !prev)}>x</button>
        </div>
        <div className="text">
          Click the button bellow to accept out amazing offer!
        </div>
        <div>
          <button onClick={handleSubmit}>Accept Offer</button>
        </div>
      </div>
    </div>
  );
};

const Modal = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {}, []);

  function handleClick(e) {
    setShowPopup(!showPopup);
  }
  return (
    <div className="modal-div">
      {!showPopup && !accepted && (
        <button onClick={handleClick}>Show Offer</button>
      )}
      {accepted && <p>Offer Accepted</p>}
      {showPopup && (
        <Popup setAccepted={setAccepted} setShowPopup={setShowPopup} />
      )}
    </div>
  );
};

export default Modal;
