import { useState } from "react";
import { Cookies, useCookies } from "react-cookie";

function SetCookie() {
  const [data, setData] = useState("");
  const [cookie, setCookie] = useCookies(["data"]);

  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 2);

  const registCookie = () => {
    setCookie("data", data, {
      url: "/",
      expires,
      // expires: expires;
    });
  };

  const loadCookie = () => {
    console.log(cookie);
  };

  return (
    <>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={registCookie}>add cookie</button>
      <button onClick={loadCookie}>load cookie</button>
    </>
  );
}

export default SetCookie;
