import { Client, Account, Databases, Storage} from "appwrite";

export const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_ENDPOINT_URL)
    .setProject(import.meta.env.VITE_PROJECT_ID); 

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export { ID } from "appwrite";