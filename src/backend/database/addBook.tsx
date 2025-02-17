import { database, ID, storage } from "../init";
import { Book } from "../../components/BookCard";

export async function addBook({
  file,
  bookData,
  userId,
}: {
  file: File;
  bookData: Book;
  userId: string;
}) {
  try {
    const uploadedFile = await storage.createFile(
      import.meta.env.VITE_BUCKET_ID,
      ID.unique(),
      file
    );

    const fileUrl = storage.getFilePreview(
      import.meta.env.VITE_BUCKET_ID,
      uploadedFile.$id
    );

    await database.createDocument(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID,
      ID.unique(),
      {
        image: fileUrl,
        imageAlt: bookData.imageAlt,
        genres: bookData.genres,
        author: bookData.author,
        name: bookData.name,
        userId: userId,
      }
    );

    window.location.reload();
  } catch (err) {
    console.error(err);
  }
}
