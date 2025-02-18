import Footer from "../components/Footer";
import Header from "../components/Header";
import { books } from "../static/books";
import { getBook } from "../backend/database/getBook";
import { UserContext } from "../middleware/UserContext";
import { useState, useEffect, useContext } from "react";
import { Book } from "../components/BookCard";
import Button from "../components/Button";
import { addBookTracker } from "../backend/database/addBookTracker";
import Input from "../components/Input";
import Label from "../components/Label";

export default function ViewBook() {
  const [book, setBook] = useState<Book>();
  const { account } = useContext(UserContext);
  const [fullyRead, setFullyRead] = useState<boolean>(false);
  const [pagesRead, setPagesRead] = useState<number>(0);

  const defaultBook =
    books[sessionStorage.getItem("bookId")?.split("-")[1] as unknown as number];
  const customBook = sessionStorage.getItem("bookId")?.split("_")[1] as string;

  useEffect(() => {
    getBook({ bookId: customBook, setBook: (e) => setBook(e) });
  }, [pagesRead]);

  return (
    <main className="p-2">
      <Header />
      <h1 className="mb-6 text-5xl capitalize">View Book</h1>
      {customBook && !defaultBook ? (
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
          <input
            className="cursor-pointer rounded-[10px] border-2 p-2 border-[#BC546B]"
            type="number"
            name="pagesRead"
            placeholder="0"
            id="pagesRead"
            onChange={(e) => setPagesRead(parseInt(e.target.value))}
          />
          <Button
            button={{
              text: "",
              onClick: () =>
                addBookTracker({
                  bookTrackData: {
                    userId: account.$id,
                    bookId: book?.$id as string,
                    pagesRead: pagesRead,
                    fullyRead: fullyRead,
                  },
                }),
            }}
          />
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
          <input
            className="cursor-pointer rounded-[10px] border-2 p-2 border-[#BC546B]"
            type="number"
            name="pagesRead"
            placeholder="0"
            id="pagesRead"
            onChange={(e) => setPagesRead(parseInt(e.target.value))}
          />

          <div className="flex justify-around w-40">
            <Input
              input={{
                type: "radio",
                placeholder: "",
                name: "fullyRead",
                id: "fullyRead",
                onChange: () => setFullyRead(true),
              }}
            />
            <Label
              label={{ htmlFor: "fullyRead", text: "haven't fully read" }}
            />
          </div>

          <div className="flex justify-around w-40">
            <Input
              input={{
                type: "radio",
                placeholder: "",
                name: "fullyRead",
                id: "fullyRead",
                onChange: () => setFullyRead(true),
              }}
            />
            <Label label={{ htmlFor: "fullyRead", text: "fully read" }} />
          </div>

          <Button
            button={{
              text: "Track Book Journey",
              onClick: () =>
                addBookTracker({
                  bookTrackData: {
                    userId: account.$id,
                    bookId: book?.$id as string,
                    pagesRead: pagesRead,
                    fullyRead: fullyRead,
                  },
                }),
            }}
          />
        </section>
      )}
      <Footer />
    </main>
  );
}
