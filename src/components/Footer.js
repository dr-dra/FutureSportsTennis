import { useState } from "react";
import "../styles.css";

const termsText =
  "Text for terms and conditions goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const privacyText =
  "Text for privacy policy goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupHeading, setPopupHeading] = useState("");
  const [popupText, setPopupText] = useState("");

  const handlePopupShow = (heading, text) => {
    setPopupHeading(heading);
    setPopupText(text);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="">
      <div className="footer">
        <div className="copyright">
          <p>&copy; 2024 FutureSports. All rights reserved.</p>
        </div>
        <div className="privacy">
          <p>
            <a
              href="#"
              onClick={() => handlePopupShow("Privacy Policy", privacyText)}
            >
              Privacy Statement
            </a>
          </p>
        </div>
        <div className="terms">
          <p>
            <a
              href="#"
              onClick={() => handlePopupShow("Terms and Conditions", termsText)}
            >
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>

      {showPopup && (
        <div className="rmodal">
          <div className="rmodal-content">
            <span className="close" onClick={handlePopupClose}>
              &times;
            </span>
            <h2>{popupHeading}</h2>
            <br></br>
            <p>{popupText}</p>
          </div>
        </div>
      )}
    </div>
  );
}
