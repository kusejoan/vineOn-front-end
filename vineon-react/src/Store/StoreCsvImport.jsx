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

const importCSV = () => {
  let updates = [];
  console.log(file, "file");
  Papa.parse(file, {
    delimiter: "",
    chunkSize: 3,
    header: true,
    complete: function(responses) {
      console.log(responses.data.length, responses);
    }
  });
};

const StoreCsvImportComponent = () => {
  return (
    <div>
      <h1>Parse your csv</h1>
      <input type="file" onChange={handleChange} />
      <button onClick={importCSV}>Parse</button>
    </div>
  );
}

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
