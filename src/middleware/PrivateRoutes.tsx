import {Outlet, Navigate} from "react-router-dom";

export default function PrivateRoutes(){
    return sessionStorage.getItem("id") ? <Outlet/> : <Navigate to = "/"/>
}