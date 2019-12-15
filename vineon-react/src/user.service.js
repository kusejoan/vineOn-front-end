import Axios from "axios";
import { API_URL, APP_JSON } from "./api";

const loginUrl = `${API_URL}/login`;
const userRegisterUrl = `${API_URL}/register`;
const storeUpdateUrl = `${API_URL}/user/store/update`;

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
      params: { username, password, confirmPassword, role }
    });

    return response.data;
  },

  async update(storeName, address, city, country, website) {
    console.log(storeUpdateUrl);
    const response = await Axios.post(storeUpdateUrl, {
      headers: { Accept: APP_JSON },
      params: { storeName, address, city, country, website }
    });

    return response.data;
  }
});
