import axios from "axios";
import Router from "next/router";

export default async function signupAPI(email: string, username: string, password: string) {
  const data = axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email: email, username: username, password: password },
    url: "http://localhost:8000/api/account/signup",
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFTOKEN",
    withCredentials: true,
  })
    .then(() => Router.push("/"))
    .catch((error) => {
      return error;
    });
  return data;
}
