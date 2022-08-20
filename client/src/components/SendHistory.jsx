import React from "react";
import { useEffect, useState } from "react";

const History = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/message?password=shivshankar",{mode:"cors"})
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
        <div>
          <p>{e.receiver_name}</p>
          <p>{e.contact}</p>
          <p>{e.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export { History };
