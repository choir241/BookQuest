import {storage, ID} from "../init";

export async function addFile({file, setFileId}:{file: File, setFileId: (e: string)=>void}){
    try{
        const uploadedFile = await storage.createFile(
            import.meta.env.VITE_BUCKET_ID,
            ID.unique(),
            file
        );
        setFileId(uploadedFile.$id);
    }catch(err){
        console.error(err);
    }
}