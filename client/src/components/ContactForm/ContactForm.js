import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [ nameInput, setNameInput ] = useState("");
  const [ emailInput, setEmailInput ] = useState("");
  const [ messageInput, setMessageInput ] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(emailInput)) {
      axios
        .post("/email", {nameInput, emailInput, messageInput})
        .then(res => {
          console.log(res)
        });
    } else {
      console.log("invaled email");
    }
  };

  return (
    <form id="emailForm">
            <div className="row">
                <div className="col">
                    <input
                      onChange={(e) => setNameInput(e.target.value)}
                      type="text" className="form-control" placeholder="Name" value={nameInput}/>
                </div>
                <div className="col">
                    <input 
                    onChange={(e) => setEmailInput(e.target.value)}
                    type="email" className="form-control" placeholder="Email" value={emailInput} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="message"></label>
                <textarea
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="form-control" id="message" rows="8" placeholder="Write your message here" value={messageInput}></textarea>
            </div>

            <button 
              onClick={(e) => handleEmailSubmit(e)}
              type="submit" form="emailForm" value="Submit">Send Message</button>
        </form>
  )
}

export default ContactForm
