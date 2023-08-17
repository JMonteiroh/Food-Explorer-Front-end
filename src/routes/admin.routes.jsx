import { Routes, Route } from "react-router-dom";

import { HomeAdmin } from "../pages/HomeAdmin";


export function AdminRoutes() {
  return(
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
    </Routes>
  )
}