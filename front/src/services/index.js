import axios from "axios";

import { login, logout } from "./auth";
import { basic } from "./user";
import { dogData, oneDog, createDog, deleteDog } from "./dogs"


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
  dogData: dogData(client),
  createDog: createDog(client),
  deleteDog: deleteDog(client),
}



export { auth, user, dogs, client };
