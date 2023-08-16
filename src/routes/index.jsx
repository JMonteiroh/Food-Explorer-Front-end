import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {

  const { user } = useAuth();

  // console.log(user)

  // if(user){
  //   if(user.isAdmin == true) {
  //     return (
  //     <BrowserRouter>
  //       <AppRoutes />
  //     </BrowserRouter>
  //     )
  //   } else {
  //     return (
  //     <BrowserRouter>
  //       <AppRoutes />
  //     </BrowserRouter>
  //     )
  //   } 
  // } else {
  //   return (
  //   <BrowserRouter>
  //     <AuthRoutes />
  //   </BrowserRouter>
  //   )
  // }
  

  return(
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}