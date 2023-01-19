import React from "react";
import CustomersDetailswithPr from "pages/CustomersDetailswithPr";
import Orders from "pages/Orders";
import Overview from "pages/Overview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/customersdetailswithpr"
          element={<CustomersDetailswithPr />}
        />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
