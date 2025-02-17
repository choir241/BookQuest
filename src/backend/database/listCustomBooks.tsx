import {database} from "../init";
import {Book} from "../../components/BookCard"

export async function listCustomBooks({setCustomBooks}:{setCustomBooks: (e: Book[])=>void}){
    try{
        const books = await database.listDocuments(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_ID,
        );

        setCustomBooks(books.documents as unknown as Book[]);
    }catch(err){
        console.error(err);
    }
}