import { database } from "../init";
import { Book } from "../../components/BookCard";

export async function getBook({bookId, setBook}:{bookId: string, setBook: (e: Book) => void}){
    try{
        const data = await database.getDocument(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_ID,
            bookId
        );

        setBook(data as unknown as Book);
    }catch(err){
        console.error(err);
    }
}