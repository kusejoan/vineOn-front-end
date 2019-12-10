import Axios from "axios";
import { API_URL, APP_JSON } from "./api";

const loginUrl = `${API_URL}/login`;

export const UserService = () => ({
  async login(username, password) {
    console.log(loginUrl);
    const response = await Axios.post(loginUrl, {
      headers: { Accept: APP_JSON },
      params: { username, password }
    });

    return response.data;
  }
});
