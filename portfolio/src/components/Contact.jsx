import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = React.useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gi18734",
        "template_spn67zu",
        formRef.current,
        "oMG2lyDGlDm5bfa9W"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <div className=" flex gap-8 w-full mx-auto p-6 bg-neutral-800 items-center justify-center">
      <h1 className="text-6xl text-white font-bold mb-4">
        Let's work together!
      </h1>
      <form className="wrapper" ref={formRef} onSubmit={sendEmail}>
        <input
          type="text"
          required
          placeholder="Name"
          name="name"
          className="w-full p-2 mb-4 border rounded-md"
        />
        <input
          type="email"
          required
          placeholder="Email"
          name="email"
          className="w-full p-2 mb-4 border rounded-md"
        />
        <textarea
          rows={8}
          placeholder="Message"
          name="message"
          className="w-full p-2 mb-4 border rounded-md"
        ></textarea>
        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 mr-4">
          Submit
        </button>
        {error && "Error"}
        {success && "Thank you for your message!"}
      </form>
    </div>
  );
};

export default Contact;
