import { MyHelmet } from "helmet";
import { Home } from "pages";
import React from "react";

const App = () => {
  return (
    <>
      <MyHelmet />
      <Home />
    </>
  );
};

export default App;
