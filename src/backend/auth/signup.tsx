import {account, ID} from "../init"

export async function signup({email, name, password}:{email: string, name:string, password: string}){
    try{
        await account.create(ID.unique(), email, name, password);
    }catch(err){
        console.error(err);
    }
}