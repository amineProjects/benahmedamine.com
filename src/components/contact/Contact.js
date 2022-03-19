import React from "react";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="section contact">
      <h2 className="title">Contact me</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="contact--form"
        // action="/success"
      >
        <input
          className="contact--input"
          type={"email"}
          placeholder="Your email"
          name="email"
        />
        <input
          className="contact--input"
          type={"text"}
          placeholder="Subject"
          name="subject"
        />
        <textarea
          className="contact--input"
          rows={5}
          placeholder="Your message"
          name="message"
        />
        <button type="submit" className="contact--button text">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
