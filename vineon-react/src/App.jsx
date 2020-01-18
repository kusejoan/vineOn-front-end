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

import React, { useState } from "react";
import "./App.css";
import logo from './wino.jpg';
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar/Navbar";
import { UserProfile } from "./User/UserProfile";
import { StoreProfile } from "./Store/StoreProfile";
import { StoreInfo } from "./Store/StoreInfo";
import { UserInfo } from "./User/UserInfo";
import { WineProfile } from "./Wine/WineProfile";
import { LogoutPage } from "./LogoutPage";
import { AddWine } from "./Wine/AddWine";
import { AddWineStore } from "./Wine/AddWineStore";
import { AllWines } from "./Wine/AllWines";
import { StoreUpdate } from "./Store/StoreUpdate";
import { UserUpdate } from "./User/UserUpdate";
import { StoresOfWine } from "./Store/StoresOfWine";
import { Route, BrowserRouter } from "react-router-dom";
import { UserInfoContext, initialUserInfoState } from "./User/UserInfoContext";
import {
  StoreInfoContext,
  initialStoreInfoState
} from "./Store/StoreInfoContext";
import { UserContext, initialUserState } from "./User/UserContext";
import { StoreContext, initialStoreState } from "./Store/StoreContext";
import { WineContext, initialWineState } from "./Wine/WineContext";
import { RegistrationPage } from "./RegistrationPage";
import { StartPage } from "./StartPage";
import { CookiesProvider, useCookies } from "react-cookie";
import { AddSuccess } from "./Wine/AddSuccess";
import { WinesOfStore } from "./Wine/WinesOfStore";
import { RemoveWineStore } from "./Wine/RemoveWineStore";
import { RemoveSuccess } from "./Wine/RemoveSuccess";
import { ReactComponent as Vineicon } from "./icon.svg";
import { SignUp } from "./SignUp";
import { StoreCsvImport } from "./Store/StoreCsvImport";
import { RateWine } from "./Wine/Ratings/RateWine";
import { AverageRating } from "./Wine/Ratings/AverageRating";
import { RatingsOfWine } from "./Wine/Ratings/RatingsOfWine";
import { FollowSuccess } from "./User/FollowSuccess";
import { UnfollowSuccess } from "./User/UnfollowSuccess";
import { Recommendations } from "./User/UserRecommendations";
import { AddFailure } from "./Wine/AddFailure";
import { AllUsers } from "./User/AllUsers";
import { NoMatchesFound } from "./Wine/NoMatchesFound";
import { SearchWine } from "./Wine/WineSearch";
import ResizeImage from 'react-resize-image'
import { SearchResult } from "./Wine/SearchResult";


export const App = () => {
  const [user, setUser] = useState(initialUserState);
  const [store, setStore] = useState(initialStoreState);
  const [wine, setWine] = useState(initialWineState);
  const [storeInfo, setStoreInfo] = useState(initialStoreInfoState);
  const [userInfo, setUserInfo] = useState(initialUserInfoState);

  return (
    <CookiesProvider>
      <div className="app" styles={{ backgroundImage:`url(${logo})`}}>
        <BrowserRouter>
          <div className="container">
            <StoreInfoContext.Provider value={{ storeInfo, setStoreInfo }}>
              <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
                <UserContext.Provider value={{ user, setUser }}>
                  <StoreContext.Provider value={{ store, setStore }}>
                    <WineContext.Provider value={{ wine, setWine }}>
                      <div className="header">
                        <Navbar />
                      </div>

                      <div className="content">
                        <Route exact path="/" component={LoginPage} />
                        <Route exact path="/added" component={AddSuccess} />
                        <Route exact path="/failure" component={AddFailure} />
                        <Route exact path="/searchresult" component={SearchResult} />

                        <Route
                          exact
                          path="/nomatchesfound"
                          component={NoMatchesFound}
                        />

                        <Route
                          exact
                          path="/removed"
                          component={RemoveSuccess}
                        />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/storeInfo" component={StoreInfo} />
                        <Route exact path="/userInfo" component={UserInfo} />
                        <Route exact path="/wine" component={WineProfile} />
                        <Route exact path="/user" component={UserProfile} />
                        <Route
                          exact
                          path="/user/followsuccess"
                          component={FollowSuccess}
                        />
                        <Route
                          exact
                          path="/user/unfollowsuccess"
                          component={UnfollowSuccess}
                        />
                        <Route
                          exact
                          path="/user/customer/recommendations"
                          component={Recommendations}
                        />
                        <Route
                          exact
                          path="/user/logout"
                          component={LogoutPage}
                        />
                        <Route path="/sign-up" component={SignUp} />
                        <Route
                          exact
                          path="/user/store"
                          component={StoreProfile}
                        />
                        <Route exact path="/user/addwine" component={AddWine} />
                        <Route
                          exact
                          path="/user/searchwine"
                          component={SearchWine}
                        />

                        <Route
                          exact
                          path="/user/store/addwine"
                          component={AddWineStore}
                        />
                        <Route
                          exact
                          path="/user/store/removewine"
                          component={RemoveWineStore}
                        />
                        <Route
                          exact
                          path="/user/store/importcsv"
                          component={StoreCsvImport}
                        />
                        <Route
                          exact
                          path="/user/customer/ratewine"
                          component={RateWine}
                        />
                        <Route
                          exact
                          path="/user/averagerating"
                          component={AverageRating}
                        />
                        <Route
                          exact
                          path="/user/ratingsofwine"
                          component={RatingsOfWine}
                        />

                        <Route
                          exact
                          path="/user/getAllWines"
                          component={AllWines}
                        />
                        <Route
                          exact
                          path="/user/getallusers"
                          component={AllUsers}
                        />
                        <Route
                          exact
                          path="/user/storesofwine"
                          component={StoresOfWine}
                        />
                        <Route
                          exact
                          path="/user/winesofstore"
                          component={WinesOfStore}
                        />
                        <Route
                          exact
                          path="/user/store/update"
                          component={StoreUpdate}
                        />
                        <Route
                          exact
                          path="/user/customer/update"
                          component={UserUpdate}
                        />
                        <Route
                          exact
                          path="/register"
                          component={RegistrationPage}
                        />
                      </div>
                    </WineContext.Provider>
                  </StoreContext.Provider>
                </UserContext.Provider>
              </UserInfoContext.Provider>
            </StoreInfoContext.Provider>
          </div>
        </BrowserRouter>
      </div>
    </CookiesProvider>
  );
};
