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
import { UserService } from "./User/user.service";
import { withRouter } from "react-router-dom";
import { UserContext } from "./User/UserContext";
import "./LoginPage.css";
import {Navbar} from "./Navbar/Navbar";
import {ReactComponent as Vineicon} from "./icon.svg";
import "./SignUp.css"


const login = (username, password, history, setUser) => {
    const response = UserService().login(username, password);
    response
        .then(value => {
            if (value.data.success === true) {
                setUser({username: value.data.user, role: value.data.role});
                history.push("/sign-up");
            }
        })
        .catch(error => console.log(error));
};

const LoginPageComponent = ({ history }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <UserContext.Consumer>
            {({setUser}) => (<React.Fragment>
                <div className="header">
                    <Navbar />
                </div>
                <div className="icon"> <Vineicon/></div>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        login(username, password, history, setUser);
                    }}
                >
                    <fieldset className="login-form">
                        <p>
                            <input className="login-input"
                                   type="text" placeholder="Nazwa użytkownika"
                                   onChange={event => setUsername(event.target.value)}
                                   value={username}
                            />
                        </p>
                        <p>
                            <input className="login-input"
                                   type="text" placeholder="Adres e-mail"
                                   onChange={event => setUsername(event.target.value)}
                                   value={username}
                            />
                        </p>
                        <p>
                            <input className="login-input"
                                   type="password" placeholder="Hasło"
                                   onChange={event => setPassword(event.target.value)}
                                   value={password}
                            />
                        </p>
                        <input className="login-input submit-button"  type="submit" value="Zarejestruj" />
                    </fieldset>
                </form>
            </React.Fragment>)
            }
        </UserContext.Consumer>
    );
};

export const SignUp = withRouter(LoginPageComponent);
