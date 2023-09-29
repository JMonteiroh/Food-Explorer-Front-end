import { Routes, Route } from "react-router-dom";

import { HomeAdmin } from "../pages/HomeAdmin";
import { DetailsAdmin } from "../pages/DetailsAdmin";
import { NewPlate } from "../pages/NewPlate"
import { EditPlate } from "../pages/EditPlate"


export function AdminRoutes() {
  return(
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/detailsadmin/:id" element={<DetailsAdmin />} />
      <Route path="/newPlate" element={<NewPlate />} />
      <Route path="/editPlate/:plate_id" element={<EditPlate />} />
    </Routes>
  )
}