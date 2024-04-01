import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (emailError === "") {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="block75">
      <div id="Contact Us" className="ml20 mr20">
        <h2>Contact Us</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="contactLabel" htmlFor="name">
                Name:
              </label>
              <input
                className="contactInput"
                type="text"
                id="name"
                name="name"
                alt="_name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="contactLabel" htmlFor="email">
                Email:
              </label>
              <input
                className="contactInput"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={validateEmail}
                required
              />
              {emailError && <p className="error">{emailError}</p>}
            </div>
            <div className="form-group">
              <label className="contactLabel" htmlFor="message">
                Message:
              </label>
              <textarea
                className="contactInput"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button className="contact-button" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      {showModal && (
        <div className="rmodal">
          <div className="rmodal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Thank You {name}</h2>
            <p>We will contact you soon on:</p>
            <p>Email: {email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
