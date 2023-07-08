import axios from "axios";

import { login, logout } from "./auth";
import { basic } from "./user";
import { oneDog } from "./dogs"


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

const dogs = {
  oneDog: oneDog(client),
}



export { auth, user, dogs };
