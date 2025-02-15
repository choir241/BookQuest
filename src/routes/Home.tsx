import BookCard, { Book } from "../components/BookCard";
import { books } from "../static/books";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <section className="flex items-center flex-col">
      {books.map((book: Book) => {
        return <BookCard key={book.name} book={book} onClick={() => {}} />;
      })}
      </section>
    </main>
  );
}
