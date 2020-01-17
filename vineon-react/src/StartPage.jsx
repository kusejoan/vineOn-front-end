import React from "react";

export const StartPage = () => (
  <div >
    <form>
      <button type="submit" formAction="/login">
        Log In
      </button>
      <button type="submit" formAction="/register">
        Sign Up
      </button>
    </form>
  </div>
);
