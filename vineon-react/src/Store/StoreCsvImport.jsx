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
import { UserService } from "../User/user.service";
import { WineService } from "../Wine/wine.service";
import { withRouter, Link } from "react-router-dom";
import { StoreInfoContext } from "./StoreInfoContext";
import { CookiesProvider, useCookies } from "react-cookie";
import { CSVReader } from "react-papaparse";
import ReactDOM from "react-dom";
import Papa from "papaparse";

let file = null;

const handleChange = ({ target: { files } }) => {
  file = files[0];
};

const send = (data, history) =>{
    const response = WineService().importCsv(data);
    response
    .then(value => {
      if (value.success === true) {
        history.push("/added");
      } else if (value.success === false) {
        history.push("/failure");
      }
    })
}

const importCSV = (history) => {
  let updates = [];
  console.log(file, "file");
  Papa.parse(file, {
    delimiter: "",
    chunkSize: 3,
    header: true,
    complete: function(responses) {
      console.log(responses.data.length, responses);
      send(responses.data, history);
    }
  });
};

const StoreCsvImportComponent = ({history}) => {
  return (
    <div>
      <h1>Add wines from csv file</h1>
      <input type="file" onChange={handleChange} />
      <button onClick={history => importCSV(history)}>Add</button>
    </div>
  );
};

const rootElement = document.getElementById("root");

export const StoreCsvImport = withRouter(StoreCsvImportComponent);

// const handleReadCSV = data => {
//   console.log(data);
// };

// const handleOnError = (err, file, inputElem, reason) => {
//   console.log(err);
// };

// const handleImportOffer = fileInput => {
//   fileInput.current.click();
// };

// const StoreCsvImportComponent = ({ history }) => {
//   const [fileInput, setFileInput] = useState(React.createRef());

//   const [cookies, setCookie, removeCookie] = useCookies([
//     "JSESSIONID",
//     "storeName",
//     "address",
//     "city",
//     "country",
//     "website"
//   ]);

//   return (
//     <div>
//       <CSVReader
//         onFileLoaded={handleReadCSV}
//         inputRef={fileInput}
//         style={{ display: "none" }}
//         onError={handleOnError}
//         configOptions={{header: true }}
//       />
//       <button onClick={(fileInput) => handleImportOffer(fileInput)}>Import</button>
//     </div>
//   );
// };

// export const StoreCsvImport = withRouter(StoreCsvImportComponent);
