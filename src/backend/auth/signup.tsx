import {account, ID} from "../init"
import { login } from "./login";

export async function signup({email, name, password}:{email: string, name:string, password: string}){
    try{
        await account.create(ID.unique(), email, password, name);

        login({email: email, password: password});
    }catch(err){
        console.error(err);
    }
}