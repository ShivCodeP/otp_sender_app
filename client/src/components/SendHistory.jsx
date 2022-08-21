import React from "react";
import { useEffect, useState } from "react";

const History = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("https://otp-sender-api.herokuapp.com/message?password=shivshankar", { mode: "cors" })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMessage([...res]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>History</h1>
      {message.map((e) => (
        <div style={{ border: "1px solid gray", width: "500px", height: "200px", margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "2px",flexDirection: "column" }}>
          <div style={{display:"flex",gap:"10px"}}>
            <p><strong>Name: </strong>{e.receiver_name?e.receiver_name:"N/A"}</p>
            <p><strong>Contact: </strong>{e.contact?e.contact:"N/A"}</p>
            <p><strong>Time: </strong>{e.createdAt?e.createdAt:"N/A"}</p>
          </div>
          <div><p><strong>Message: </strong>{e.message?e.message:"N/A"}</p></div>
        </div>
      ))}
    </div>
  );
};

export { History };
