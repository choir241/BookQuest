import BookCard, { Book } from "../components/BookCard";
import { books } from "../static/books";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      {books.map((book: Book) => {
        return <BookCard key={book.name} book={book} onClick={() => {}} />;
      })}
    </main>
  );
}
