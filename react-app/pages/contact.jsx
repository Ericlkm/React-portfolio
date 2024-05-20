import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(name, email, message);
    alert(`Message Sent!🕊️\n To: ${name}\n Msg: ${message}`);

    // const N = document.getElementById("name");
    // const E = document.getElementById("email");
    // const M = document.getElementById("message");
    // N.value = "";
    // E.value = "";
    // M.value = "";
    setName("");
    setEmail("");
    setMessage("");
  };
  const styles = {
    h1: {
      color: "white",
      fontSize: "50px",
      textAlign: "center",
      textShadow: "0px 0px 10px black",
    },
    msg: {
      color: "white",
      textAlign: "left",
      textShadow: "0px 0px 10px black",
    },
  };

  return (
    <>
      <h1 style={styles.h1}>Contact Me!</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="contact-form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="contact-form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email" className="contact-form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="contact-form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message" className="contact-form-label">
          Message:
        </label>
        <textarea
          id="message"
          className="contact-form-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" className="contact-form-button">
          <i className="fa fa-check"></i> Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
