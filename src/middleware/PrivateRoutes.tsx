import {Outlet, Navigate} from "react-router-dom";
import { useContext } from "react";
import { UserContext} from "./UserContext";

export default function PrivateRoutes(){
    const {account} = useContext(UserContext);
    
    return sessionStorage.getItem("id") || account.$id ? <Outlet/> : <Navigate to = "/"/>
}