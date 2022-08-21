import React from "react";
import { useSearchParams } from "react-router-dom";

const Show = () => {
  const [searchParams] = useSearchParams();
  const val = Math.floor(100000 + Math.random() * 900000);

  const name = searchParams.get("first_name") + " " + searchParams.get("last_name");

  const text = `Hii ${name} your otp (one time password) is ${val}, Please don't share with others.`;

  const contact = "+91" + searchParams.get("contact");

  const handleSubmit = () => {
    fetch("https://otp-sender-api.herokuapp.com/message", {
      method: "POST",
      body: JSON.stringify({
        message: text,
        contact: contact,
        receiver_name: name
      }),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => console.log("message posted"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <strong>Name:</strong> <p>{name}</p>
      </div>
      <div>
        <strong>Contact no:</strong> <p>{contact}</p>
      </div>
      <p>{text}</p>
      <button onClick={handleSubmit}>Send Message</button>
    </div>
  );
};

export { Show };
