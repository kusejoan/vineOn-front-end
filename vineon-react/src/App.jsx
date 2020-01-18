import React, { useState } from "react";
import "./App.css";
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

export const App = () => {
  const [user, setUser] = useState(initialUserState);
  const [store, setStore] = useState(initialStoreState);
  const [wine, setWine] = useState(initialWineState);
  const [storeInfo, setStoreInfo] = useState(initialStoreInfoState);
  const [userInfo, setUserInfo] = useState(initialUserInfoState);

  return (
    <CookiesProvider>
      <div className="app">
        <div className="up-header"></div>
        <div className="bottom-header"></div>
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
                        <Route exact path="/user/followsuccess" component={FollowSuccess} />
                        <Route exact path="/user/unfollowsuccess" component={UnfollowSuccess} />
                        <Route exact path="/user/customer/recommendations" component={Recommendations} />
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
