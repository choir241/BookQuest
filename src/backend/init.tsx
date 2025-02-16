import { Client, Account} from "appwrite";

export const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_ENDPOINT_URL)
    .setProject(import.meta.env.VITE_PROJECT_ID); 

export const account = new Account(client);
export { ID } from "appwrite";