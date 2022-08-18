import React, {useContext} from "react";
import { authRoutes, publicRoutes } from "../router";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { Route, Routes, Navigate } from 'react-router-dom'
import Auth from "../pages/Auth";
import Contacts from "../pages/Contacts";

const AppRouter = observer(() => {
   const {user} = useContext(Context)
   return(
      <Routes>
         {user.isAuth && authRoutes.map(route => 
            <Route 
               element={<Contacts/>}
               path={route.path}
               key={route.path} 
            />
         )}
         {publicRoutes.map(route =>
            <Route
               element={<Auth/>}
               path={route.path}
               key={route.path}
            />
         )}
         <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
   )
})

export default AppRouter;