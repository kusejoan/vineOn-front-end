import Axios from "axios";
import { API_URL, APP_JSON } from "./api";

const loginUrl = `${API_URL}/login`;
const registerUrl = `${API_URL}/register`;

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
    console.log(registerUrl);
    const response = await Axios.post(registerUrl, {
      headers: { Accept: APP_JSON },
      params: { username, password, confirmPassword, role }
    });

    return response.data;
  }
});
