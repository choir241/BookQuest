import {account} from "../init"

export async function login({email, password}:{email: string, password: string}){
    try{
        const user = await account.createEmailPasswordSession(email, password);
        sessionStorage.setItem("id", user.userId);
        window.location.reload();
    }catch(err){
        console.error(err);
    }
}