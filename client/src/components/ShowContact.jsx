import React from "react";
import { useSearchParams,useNavigate } from "react-router-dom";

const Show = () => {
  const navigate = useNavigate();
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
      .then((res) =>  navigate("/success", replace={true}))
      .catch((err) =>navigate("/error", replace={true}) );
  };

  return (
    <div style={{border: "1px solid gray", width: "500px", height: "200px", margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "5px", flexDirection: "column" }}>
      <div>
        <p><strong>Name: </strong>{name}</p>
        <p><strong>Contact no: </strong>{contact}</p>
      </div>
      <p><strong>Message: </strong>{text}</p>
      <button onClick={handleSubmit}>Send Message</button>
    </div>
  );
};

export { Show };
