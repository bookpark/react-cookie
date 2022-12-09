import { useCookies } from "react-cookie";

function GetCookie() {
  const [cookie, setCookie, removeCookie] = useCookies(["data"]);

  const deleteCookie = () => {
    removeCookie("data");
  };

  return (
    <>
      <button onClick={deleteCookie}>remove cookie</button>
      <h1>cookie : {cookie.data}</h1>
    </>
  );
}

export default GetCookie;
