import React from "react";
import { Link } from "react-router-dom";

const List = ({ contacts }) => {
  return (
    <div>
      {contacts.users.map((e) => (
        <div key={e.id} style={{border:"2px solid gray",width:"300px",height:"60px",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"2px",gap:"10px"}}>
          <Link style={{textDecoration:"none"}}
            to={`/info?contact=${e.contact_no}&first_name=${e.first_name}&last_name=${e.last_name}`}
          >
            <strong>{e.contact_no}</strong>
          </Link>
          <Link style={{textDecoration:"none"}} to={`/info?contact=${e.contact_no}&first_name=${e.first_name}&last_name=${e.last_name}`}> <button>Send</button> </Link>
        </div>
      ))}
    </div>
  );
};

export { List };
