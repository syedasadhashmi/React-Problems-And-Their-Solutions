import React from "react";
// import "./styles.css";

function ContactForm() {
  return (
    <div style={{ width: 20, boxShadow: "5px" }}>
      <form>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Message
          <textarea type="text" />
        </label>
      </form>
    </div>
  );
}

export default ContactForm;
