import React from "react";
import Auth from "../pages/Auth";
import Contacts from "../pages/Contacts";

export interface ARoute{
   path: string;
   element: React.ComponentType;
   exact?: boolean;
}

export const publicRoutes: ARoute[] = [
   {path: '/', element: Auth, exact: true},
   {path: '/login', element: Auth, exact: true},
   {path: '/registration', element: Auth, exact: true},
]
export const authRoutes: ARoute[] = [
   {path: '/contacts', element: Contacts, exact: true},
]