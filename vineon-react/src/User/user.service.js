/*
 * Copyright (c) 2020.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *  1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *  3. Neither the name of Vineon nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

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
  async login( username, password) {
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
