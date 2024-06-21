import axios from "axios";
import React from "react";

const API_URL =
  "https://portfolio-v2-backend-git-main-tojo-josephs-projects.vercel.app/api/";

let stateAccessToken: any = null;

export function setAccessToken(token: string) {
  console.log(token);

  stateAccessToken = token;
  console.log("stateAccessToken", stateAccessToken);
}

let accessToken = stateAccessToken || localStorage.getItem("accessToken");

async function resolve(promise: any) {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await promise;
  } catch (e: any) {
    resolved.error = e;
  }
  return resolved;
}

export async function get(path: string, urlParams: object) {
  let accessToken = stateAccessToken || localStorage.getItem("accessToken");
  let FULL_URL = API_URL + path;
  let headers = { Authorization: accessToken };
  console.log("headers", headers);
  let options = { headers: headers, params: urlParams };
  return axios.get<any>(FULL_URL, options);
}

export async function post(path: string, data: object) {
  let accessToken = stateAccessToken || localStorage.getItem("accessToken");
  let FULL_URL = API_URL + path;
  let headers = { Authorization: accessToken };
  let options = { headers: headers };
  return axios
    .post(FULL_URL, data, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      if (err.statusCode == 401) {
        localStorage.setItem("accessToken", "");
      }
    });
}

export async function patch(path: string, data: object) {
  let accessToken = stateAccessToken || localStorage.getItem("accessToken");

  let FULL_URL = API_URL + path;
  let headers = { Authorization: accessToken };
  let options = { headers: headers };
  return axios
    .patch(FULL_URL, data, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function put(path: string, data: object) {
  let accessToken = stateAccessToken || localStorage.getItem("accessToken");
  let FULL_URL = API_URL + path;
  let headers = { Authorization: accessToken };
  let options = { headers: headers };
  return axios
    .put(FULL_URL, data, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function del(path: string) {
  let accessToken = stateAccessToken || localStorage.getItem("accessToken");

  let FULL_URL = API_URL + path;
  let headers = { Authorization: accessToken };
  let options = { headers: headers };
  return axios
    .delete(FULL_URL, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getProfile() {
  // const navigate = useNavigate();
  let accessToken = stateAccessToken || localStorage.getItem("accessToken");

  let FULL_URL = API_URL + "getProfile";
  let headers = { Authorization: accessToken };
  let options = { headers: headers };
  console.log(FULL_URL);
  console.log(headers);

  console.log(options);

  return axios
    .get(FULL_URL, options)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      if (err && accessToken) {
        localStorage.setItem("accessToken", "");
        // navigate("/login");
        // window.location.replace("/login");
      }
    });
}
