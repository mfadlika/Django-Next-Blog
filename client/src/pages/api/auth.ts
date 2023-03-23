import axios from "axios";
import Router from "next/router";

export default async function signupAPI(
  email: string,
  username: string,
  password: string
) {
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

export async function signinAPI(username: string, password: string) {
  const data = axios
    .post("http://localhost:8000/api/account/signin", {
      headers: {
        "Content-Type": "application/json",
      },
      data: { username: username, password: password },
      xsrfCookieName: "csrftoken",
      xsrfHeaderName: "X-CSRFToken",
      withCredentials: true,
    })
    .then((response) => {
      localStorage.setItem("token", response.data["token"]);
      console.log(response);
      Router.push("/");
    })
    .catch((error) => {
      return error;
    });
  return data;
}

export async function verifyToken(token: string) {
  axios.get("http://localhost:8000/api/account/index", {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },

    withCredentials: true,
  });
}
