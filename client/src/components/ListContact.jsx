import React from "react";
import { Link } from "react-router-dom";

const List = ({ contacts }) => {
  return (
    <div>
      {contacts.users.map((e) => (
        <div key={e.id}>
          <Link
            to={`/info?contact=${e.contact_no}&first_name=${e.first_name}&last_name=${e.last_name}`}
          >
            <strong>{e.contact_no}</strong>
          </Link>
          <button> Send </button>
        </div>
      ))}
    </div>
  );
};

export { List };
