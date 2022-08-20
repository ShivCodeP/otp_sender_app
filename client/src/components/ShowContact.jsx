import React from "react";
import { useSearchParams } from "react-router-dom";

const Show = () => {
  const [searchParams] = useSearchParams();
  const val = Math.floor(100000 + Math.random() * 900000);

  return (
    <div>
      <div>
        <strong>Name:</strong>{" "}
        <p>
          {searchParams.get("first_name")} {searchParams.get("last_name")}
        </p>
      </div>
      <div>
        <strong>Contact no:</strong> <p>{searchParams.get("contact")}</p>
      </div>
      <p>
        Hii your otp (one time password) is {val}, Please don't share with
        others.{" "}
      </p>
      <button>Send Message</button>
    </div>
  );
};

export { Show };
