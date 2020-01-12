import Axios from "axios";
import { API_URL, APP_JSON } from "../api";

// POST JSON

const loginUrl = `${API_URL}/login`;
const userRegisterUrl = `${API_URL}/register`;
const storeUpdateUrl = `${API_URL}/user/store/update`;
const storesOfWineUrl = `${API_URL}/user/storesofwine`;
const addWineUrl = `${API_URL}/user/addwine`;
const allWinesUrl = `${API_URL}/user/getAllWines`;


export const UserService = () => ({
  async login(username, password) {
    console.log(loginUrl);
    const response = await Axios.post(loginUrl, {
      headers: { Accept: APP_JSON },
      params: { username, password }
    });

    return response.data;
  },

  async register(username, password, confirmPassword, role) {
    console.log(userRegisterUrl);
    const response = await Axios.post(userRegisterUrl, {
      headers: { Accept: APP_JSON },
      params: { username, password, role, passwordConfirm: confirmPassword }
    });

    return response.data;
  },

  async update(address, city, country, website) {
    console.log(storeUpdateUrl);
    const response = await Axios.post(storeUpdateUrl, {
      headers: { Accept: APP_JSON },
      params: { address, city, country, website }
    });

    return response.data;
  },

  async storesOfWine(wineName) {
    console.log(storesOfWineUrl);
    const response = await Axios.post(storesOfWineUrl, {
      headers: { Accept: APP_JSON },
      params: { wineName }
    });

    return response.data;
  }

  // async setCookies(username, password){
  //   console.log(loginUrl);
  //   const response = await Axios.post(loginUrl, {
  //     headers: { Accept: APP_JSON },
  //     params: { username, password }
  //   });

  //   return response.data;
  // }
});