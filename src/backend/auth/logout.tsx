import {account} from "../init";

export async function logout(){
    try{
        await account.deleteSessions();
        sessionStorage.clear();
        window.location.reload();
    }catch(err){
        console.error(err);
    }
}