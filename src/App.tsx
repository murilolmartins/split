import React from "react";
import AllRoutes from "./Routes";
import { GlobalStyles } from "./Styles/globalstyle";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <AllRoutes />
      <GlobalStyles />
      <ToastContainer />
    </div>
  );
}

export default App;
