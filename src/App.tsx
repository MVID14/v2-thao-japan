import { Fragment } from "react";
import Home from "@pages/home";
// import { Col, DatePicker } from "antd";
// import { Text } from "./components/text";
// import MasterLayout from "@layouts/masterLayout";
import { Routes, Route } from "react-router-dom";
import Lotrinh from "@pages/lo-trinh";
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lo-trinh" element={<Lotrinh />} />
      </Routes>
    </Fragment>
  );
};

export default App;
