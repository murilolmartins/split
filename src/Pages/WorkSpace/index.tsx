// import Route from "../../Routes/route";
import styles from "./WorkSpace.module.css";
import { Routes, Route } from "react-router-dom";
import HeaderAuth from "../../Components/WorkSpace/HeaderAuth";
import WorkSpace from "../../Components/WorkSpace";
import CreateWSF from "../../Components/CreateWorkSpace/First";
import CreateWSS from "../../Components/CreateWorkSpace/Second";
import CreateWST from "../../Components/CreateWorkSpace/Third";

const WorkSpaceHome = () => {
  return (
    <div className={styles.createws_container}>
      <HeaderAuth />
      <Routes>
        <Route path="/" element={<WorkSpace />} />
        <Route path="create/first" element={<CreateWSF />} />
        <Route path="create/second" element={<CreateWSS />} />
        <Route path="create/third" element={<CreateWST />} />
      </Routes>
    </div>
  );
};

export default WorkSpaceHome;
