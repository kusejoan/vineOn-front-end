import React, { useState } from "react";
import { UserService } from "../User/user.service";
import { WineService } from "../Wine/wine.service";
import { withRouter, Link } from "react-router-dom";
import { StoreInfoContext } from "./StoreInfoContext";
import { CookiesProvider, useCookies } from "react-cookie";
import { CSVReader } from "react-papaparse";

const handleReadCSV = data => {
  console.log(data);
};

const handleOnError = (err, file, inputElem, reason) => {
  console.log(err);
};

const handleImportOffer = fileInput => {
  fileInput.current.click();
};

const StoreCsvImportComponent = ({ history }) => {
  const [fileInput, setFileInput] = useState(React.createRef());

  const [cookies, setCookie, removeCookie] = useCookies([
    "JSESSIONID",
    "storeName",
    "address",
    "city",
    "country",
    "website"
  ]);

  return (
    <div>
      <CSVReader
        onFileLoaded={handleReadCSV}
        inputRef={fileInput}
        style={{ display: "none" }}
        onError={handleOnError}
        configOptions={{header: true }}
      />
      <button onClick={handleImportOffer(fileInput)}>Import</button>
    </div>
  );
};

export const StoreCsvImport = withRouter(StoreCsvImportComponent);
