import React from "react";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "10ef0624-d95c-4089-a626-fc07f4a56e3c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((response) => response.json());

    if (response.success) {
      alert(response.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src="../../assets/theme_pattern.svg" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="../../assets/mail_icon.svg" alt="" />
              <p>lavanka6@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="../../assets/call_icon.svg" alt="" />
              <p>+94 76-464-2146</p>
            </div>
            <div className="contact-detail">
              <img src="../../assets/location_icon.svg" alt="" />
              <p>Colombo,Sri Lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter the message"
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
