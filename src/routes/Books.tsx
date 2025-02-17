import BookCard, { Book } from "../components/BookCard";
import { books } from "../static/books";
import Button from "../components/Button";
import { useState, useContext} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CustomBookContext } from "../middleware/CustomBookContext";

export default function Books() {
  const [numOfItems, setNumOfItems] = useState<number>(5);

  const {customBooks} = useContext(CustomBookContext);

  return (
    <main className="p-2">
      <Header />
      <h1 className="text-5xl">Library</h1>
      <section className="flex items-center flex-col">
        {[books, customBooks].flatMap((book)=>book).map((book: Book) => {
            return <BookCard key={book.name} book={book} onClick={() => {}} />;
          })
          .slice(0, numOfItems)}

        {numOfItems >= [books, customBooks].flatMap((book)=>book).length ? (
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

      <Footer />
    </main>
  );
}
