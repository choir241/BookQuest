import {Outlet, Navigate} from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function PublicRoutes(){
    const {account} = useContext(UserContext);

    return account.$id || sessionStorage.getItem("id") ? <Navigate to = "/books"/> : <Outlet/>
}