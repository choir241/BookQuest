import {account} from "../init"

export async function login({email, password}:{email: string, password: string}){
    try{
        await account.createEmailPasswordSession(email, password);
    }catch(err){
        console.error(err);
    }
}