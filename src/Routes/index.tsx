import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import WorkSpaceHome from "../Pages/WorkSpace";
// import Route from "./route";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="login/*" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="workspaces/*" element={<WorkSpaceHome />} />
    </Routes>
  );
};

export default AllRoutes;
