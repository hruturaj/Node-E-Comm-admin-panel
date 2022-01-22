import axios from "axios";

const BASE_URL = "https://node-e-com.herokuapp.com/api";
let TOKEN = "";

if (JSON.parse(localStorage.getItem("persist:root")) !== null) {
  if (
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser !== null
  ) {
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser.accessToken;
  }
}
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer:${TOKEN}` },
});
