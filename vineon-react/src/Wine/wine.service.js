import Axios from "axios";
import { API_URL, APP_JSON } from "../api";
import * as querystring from "querystring";
import qs from "qs";

// POST JSON

const loginUrl = `${API_URL}/login`;
const userRegisterUrl = `${API_URL}/register`;
const storeUpdateUrl = `${API_URL}/user/store/update`;
const addWineUrl = `${API_URL}/user/addwine`;
const addWineStoreUrl = `${API_URL}/user/store/addwine`;
const removeWineStoreUrl = `${API_URL}/user/store/removewine`;
const allWinesUrl = `${API_URL}/user/getAllWines`;
const winesOfStoreUrl = `${API_URL}/user/winesofstore`;

export const WineService = () => ({
  async addWine(JSESSINID, wineName, country, year, color, type) {
    console.log(addWineUrl);
    const response = await Axios.post(
      addWineUrl,

        querystring.stringify({
        headers: { Accept: APP_JSON },
        params: { JSESSINID, wineName, country, year, color, type }
      })
    );

    return response.data;
  },

  async addWineStore(JSESSINID, wineName) {
    console.log(addWineStoreUrl);
    const response = await Axios.post(
      addWineStoreUrl,
      querystring.stringify({
        headers: { Accept: APP_JSON },
        params: { JSESSINID, wineName }
      })
    );

    return response.data;
  },

  async removeWineStore(JSESSINID, wineName) {
    console.log(removeWineStoreUrl);
    const response = await Axios.post(
      removeWineStoreUrl,
      querystring.stringify({
        headers: { Accept: APP_JSON },
        params: { JSESSINID, wineName }
      })
    );

    return response.data;
  },

  async allWines(JSESSINID) {
    console.log(allWinesUrl);
    const response = await Axios.post(
      allWinesUrl,
      querystring.stringify({
        headers: { Accept: APP_JSON },
        params: { JSESSINID }
      })
    );

    return response.data;
  },

  async winesOfStore(JSESSINID, storeName) {
    console.log(winesOfStoreUrl);
    const response = await Axios.post(
      winesOfStoreUrl,
      querystring.stringify({
        headers: { Accept: APP_JSON },
        params: { JSESSINID, storeName }
      })
    );

    return response.data;
  }
});
