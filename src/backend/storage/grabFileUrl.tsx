import { storage } from "../init";

export async function grabFileUrl({fileId, setFileUrl}:{fileId: string, setFileUrl: (e:string)=>void}){
    try{
        const file = storage.getFilePreview(
            import.meta.env.VITE_BUCKET_ID,
            fileId
        );
        setFileUrl(file);
    }catch(err){
        console.error(err);
    }
}