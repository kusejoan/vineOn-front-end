import Axios from "axios";
import { API_URL, APP_JSON } from "../App/api";

// POST JSON

const loginUrl = `${API_URL}/login`;
const userRegisterUrl = `${API_URL}/register`;
const storeUpdateUrl = `${API_URL}/user/store/update`;
const addWineUrl = `${API_URL}/user/addwine`;
const allWinesUrl = `${API_URL}/user/getAllWines`;


export const WineService = () => ({
  async addWine(wineName, country, year, color, type) {
    console.log(addWineUrl);
    const response = await Axios.post(addWineUrl, {
      headers: { Accept: APP_JSON },
      params: { wineName, country, year, color, type }
    });

    return response.data;
  },

  async allWines() {
    console.log(allWinesUrl);
    const response = await Axios.post(allWinesUrl, {
      headers: { Accept: APP_JSON },
      params: { }
    });

    return response.data;
  }
});