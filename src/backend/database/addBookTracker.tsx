import {database, ID} from "../init";

interface IBookTrackData{
    bookId: string,
    userId: string,
    pagesRead: number,
    fullyRead: boolean,
}

export async function addBookTracker({bookTrackData}:{bookTrackData: IBookTrackData}){
    try{
        await database.createDocument(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_BOOK_TRACKER_ID,
            ID.unique(),
            bookTrackData
        );
    }catch(err){
        console.error(err);
    }
}