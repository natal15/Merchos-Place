import axios from "axios";

import { login, logout } from "./auth";
import { basic } from "./user";


const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const auth = {
  login: login(client),
  logout: logout(client),
};

const user = {
    basic: basic(client),

}



export { auth, user };
