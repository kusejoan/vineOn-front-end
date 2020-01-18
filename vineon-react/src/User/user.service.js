import Axios from "axios";
import qs from "qs";
import { API_URL, APP_JSON } from "../api";

// POST JSON
const loginUrl = `${API_URL}/login`;
const userRegisterUrl = `${API_URL}/register`;
const storeUpdateUrl = `${API_URL}/user/store/update`;
const userUpdateUrl = `${API_URL}/user/customer/update`;
const storesOfWineUrl = `${API_URL}/user/storesofwine`;
const followUrl = `${API_URL}/user/follow`;
const unfollowUrl = `${API_URL}/user/unfollow`;
const recommendationsUrl = `${API_URL}/user/customer/recommendations`;
const allUsersUrl = `${API_URL}/user/getallusers`;


Axios.defaults.withCredentials = true;
export const UserService = () => ({
  async login(JSESSINID, username, password) {
    console.log(loginUrl);
    const response = await Axios.post(
      loginUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { username, password }
      })
    );

    return response.data;
  },

  async register(JSESSINID, username, password, confirmPassword, role) {
    console.log(userRegisterUrl);
    const response = await Axios.post(
      userRegisterUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: {
          JSESSINID,
          username,
          password,
          role,
          passwordConfirm: confirmPassword
        }
      })
    );

    return response.data;
  },

  async update(JSESSINID, storeName, address, city, country, website) {
    console.log(storeUpdateUrl);
    const response = await Axios.post(
      storeUpdateUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { JSESSINID, storeName, address, city, country, website }
      })
    );

    return response.data;
  },

  async follow(username) {
    console.log(followUrl);
    const response = await Axios.post(
      followUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { username }
      })
    );

    return response.data;
  },

  async unfollow(username) {
    console.log(unfollowUrl);
    const response = await Axios.post(
      unfollowUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { username }
      })
    );

    return response.data;
  },

  async allUsers() {
    console.log(allUsersUrl);
    const response = await Axios.post(
      allUsersUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: {  }
      })
    );

    return response.data;
  },

  async recommendations(onlyFollowed, limit, color, country) {
    console.log(recommendationsUrl);
    const response = await Axios.post(
      recommendationsUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { onlyFollowed, limit, color, country }
      })
    );

    return response.data;
  },

  async updateUser(JSESSINID, firstName, surname, birthdate) {
    console.log(userUpdateUrl);
    const response = await Axios.post(
      userUpdateUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { JSESSINID, firstName, surname, birthdate }
      })
    );

    return response.data;
  },

  async storesOfWine(wineName) {
    console.log(storesOfWineUrl);
    const response = await Axios.post(
      storesOfWineUrl,
      qs.stringify({
        headers: { Accept: APP_JSON },
        params: { wineName }
      })
    );

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
