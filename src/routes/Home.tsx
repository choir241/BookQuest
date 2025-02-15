import BookCard, { Book } from "../components/BookCard";
import { books } from "../static/books";
import Button from "../components/Button";
import { useState } from "react";

export default function Home() {
  const [numOfItems, setNumOfItems] = useState<number>(5);

  return (
    <main>
      <h1>Home</h1>
      <section className="flex items-center flex-col">
        {books
          .map((book: Book) => {
            return <BookCard key={book.name} book={book} onClick={() => {}} />;
          })
          .slice(0, numOfItems)}

        {numOfItems >= books.length ? (
          ""
        ) : (
          <Button
            button={{
              text: "Show more",
              onClick: () => setNumOfItems(numOfItems + 5),
            }}
          />
        )}
      </section>
    </main>
  );
}
