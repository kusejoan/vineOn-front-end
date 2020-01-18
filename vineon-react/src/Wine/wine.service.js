import Axios from "axios";
import { API_URL, APP_JSON } from "../api";
import qs from "qs";

// POST JSON

const addWineUrl = `${API_URL}/user/addwine`;
const addWineStoreUrl = `${API_URL}/user/store/addwine`;
const removeWineStoreUrl = `${API_URL}/user/store/removewine`;
const rateWineUrl = `${API_URL}/user/customer/ratewine`;
const ratingsOfWineUrl = `${API_URL}/user/ratingsofwine`;
const allWinesUrl = `${API_URL}/user/getAllWines`;
const averageRatingUrl = `${API_URL}/user/averagerating`;
const importCsvUrl = `${API_URL}/user/store/importcsv`;
const winesOfStoreUrl = `${API_URL}/user/winesofstore`;
const wineSearchUrl = `${API_URL}/user/searchwine`;

export const WineService = () => ({
  async addWine(JSESSINID, wineName, country, year, color, type) {
    console.log(addWineUrl);
    const response = await Axios.post(
      addWineUrl,

        qs.stringify({
        headers: { Accept: APP_JSON },
        params: { JSESSINID, wineName, country, year, color, type }
      })
    );

    return response.data;
  },

  async importCsv(data) {
    console.log(importCsvUrl);
    const response = await Axios.post(
      importCsvUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { data }
      })
    );

    return response.data;
  },

  async rateWine(wineName, grade, description) {
    console.log(rateWineUrl);
    const response = await Axios.post(
      rateWineUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { wineName, grade, description }
      })
    );

    return response.data;
  },

  async ratingsOfWine(wineName) {
    console.log(ratingsOfWineUrl);
    const response = await Axios.post(
      ratingsOfWineUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { wineName}
      })
    );

    return response.data;
  },

  async averageRating(wineName) {
    console.log(averageRatingUrl);
    const response = await Axios.post(
      averageRatingUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { wineName}
      })
    );

    return response.data;
  },

  async addWineStore(JSESSINID, wineName) {
    console.log(addWineStoreUrl);
    const response = await Axios.post(
      addWineStoreUrl,
      qs.stringify({
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
      qs.stringify({
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
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { JSESSINID }
      })
    );

    return response.data;
  },
  async wineSearchName(wineName) {
    console.log(wineSearchUrl);
    const response = await Axios.post(
      wineSearchUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { wineName }
      })
    );

    return response.data;
  },
  async wineSearchColorType(color, type) {
    console.log(wineSearchUrl);
    const response = await Axios.post(
      wineSearchUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { color, type }
      })
    );

    return response.data;
  },

  async winesOfStore(JSESSINID, storeName) {
    console.log(winesOfStoreUrl);
    const response = await Axios.post(
      winesOfStoreUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { JSESSINID, storeName }
      })
    );

    return response.data;
  }
});
