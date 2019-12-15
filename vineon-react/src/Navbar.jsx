import React from "react";

export const Navbar = () => (
  <React.Fragment>
    <div>
      {" "}
      VineOn
      <form>
        <button type="submit" formAction="/user/getAllWines">
          All wines
        </button>
      </form>
    </div>

    <div>
      <br />
    </div>
    <div>
      <br />
    </div>
  </React.Fragment>
);
