import Footer from "../components/Footer";
import Header from "../components/Header";
import { books } from "../static/books";
import { getBook } from "../backend/database/getBook";
import { useState, useEffect } from "react";
import { Book } from "../components/BookCard";

export default function ViewBook() {
  const [book, setBook] = useState<Book>();

  const defaultBook =
    books[sessionStorage.getItem("bookId")?.split("-")[1] as unknown as number];
  const customBook = sessionStorage.getItem("bookId")?.split("_")[1] as string;

  useEffect(() => {
    getBook({ bookId: customBook, setBook: (e) => setBook(e) });
  }, []);

  return (
    <main className="p-2">
      <Header />
      <h1 className="mb-6 text-5xl capitalize">View Book</h1>
      { customBook && !defaultBook ? (
        <section className="shadow-[10px_10px_10px_#C9ABC5] min-w-[850px] flex items-center flex-col bg-[#F1B6CA] p-4 my-6 rounded-[10px]">
          <section className="flex justify-center flex-col items-center">
            <h2 className="text-4xl mb-2">{book?.name}</h2>
            <h3 className="text-3xl">{book?.author}</h3>

            <div className="flex mt-6 items-center justify-between">
              {book?.genres.map((genre) => {
                return (
                  <span
                    className="text-base text-[#F1E4EE] p-2 bg-[#BC546B] rounded-[10px] mr-2"
                    key={genre}
                  >
                    {genre}
                  </span>
                );
              })}
            </div>
          </section>
          <img className="w-80 mt-8" src={book?.image} alt={book?.imageAlt} />
        </section>
      ) : (
        <section className="shadow-[10px_10px_10px_#C9ABC5] min-w-[850px] flex items-center flex-col bg-[#F1B6CA] p-4 my-6 rounded-[10px]">
          <section className="flex justify-center flex-col items-center">
            <h2 className="text-4xl mb-2">{defaultBook.name}</h2>
            <h3 className="text-3xl">{defaultBook.author}</h3>

            <div className="flex mt-6 items-center justify-between">
              {defaultBook.genres.map((genre) => {
                return (
                  <span
                    className="text-base text-[#F1E4EE] p-2 bg-[#BC546B] rounded-[10px] mr-2"
                    key={genre}
                  >
                    {genre}
                  </span>
                );
              })}
            </div>
          </section>
          <img
            className="w-80 mt-8"
            src={defaultBook.image}
            alt={defaultBook.imageAlt}
          />
        </section>
      )}
      <Footer />
    </main>
  );
}
