import React from "react";

export const StartPage = () => (
  <div>
    <form>
      <button type="submit" formAction="/login_page">
        Log In
      </button>
      <button type="submit" formAction="/registration_page">
        Sign Up
      </button>
    </form>
  </div>
);
