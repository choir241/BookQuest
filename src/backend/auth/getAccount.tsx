import { account } from "../init";

export interface IAccount {
  $id: string
  email: string;
  name: string;
}

export async function getAccount({setAccount}:{setAccount: (e:IAccount)=>void}) {
  try {
    const user = await account.get();
    setAccount(user);
  } catch (err) {
    console.error(err);
  }
}
