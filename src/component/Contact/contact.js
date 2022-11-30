import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact-box"  id="Contact">
        <div className="contact-title">
          <h2>Contact Me</h2>
        </div>
        <form action="">
          <div className="row">
            <div className="first">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="last">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="first">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="last">
              <label>Phone Number</label>
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="first">
              <label>Message</label>
              <textarea placeholder="Type your message..."></textarea>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
