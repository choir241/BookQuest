import {Outlet, Navigate} from "react-router-dom";

export default function PublicRoutes(){
    return sessionStorage.getItem("id") ? <Navigate to = "/books"/> : <Outlet/>
}