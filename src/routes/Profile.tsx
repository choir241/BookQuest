import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import { UserContext } from "../middleware/UserContext";
import { CustomBookContext } from "../middleware/CustomBookContext";
import { Book } from "../components/BookCard";
import { IAccount } from "../backend/auth/getAccount";
import Button from "../components/Button";

function currentUsersBooks({
  customBooks,
  account,
}: {
  customBooks: Book[];
  account: IAccount;
}) {
  return customBooks.filter((book: Book) => {
    if (book.userId === account.$id) {
      return book;
    }
  });
}

export default function Profile() {
  const { account } = useContext(UserContext);
  const { customBooks } = useContext(CustomBookContext);
  const [toggleCustomDisplay, setToggleCustomDisplay] =
    useState<boolean>(false);

  const usersBooks = currentUsersBooks({ customBooks, account });

  return (
    <main className="p-2">
      <Header />
      <h1 className="mb-6 text-5xl capitalize">
        welcome to your account, {account.name}
      </h1>
      <section className="w-full py-10 flex flex-col items-center justify-center bg-[#F1B6CA] shadow-[10px_10px_10px_#C9ABC5] rounded-[10px]">
        {toggleCustomDisplay ? (
          <div className="w-full flex flex-col items-center">
            <table className="w-full mb-6">
              <thead>
                <tr className="bg-[#E5DCE7]">
                  <td className="p-1 text-xl text-center">Name</td>
                  <td className="p-1 text-xl text-center">Author</td>
                  <td className="p-1 text-xl text-center">Genres</td>
                </tr>
              </thead>
              <tbody>
                {usersBooks.map((book: Book, i: number) => {
                  if (i % 2 !== 0) {
                    return (
                      <tr key={book.name} className="bg-[#E5DCE7]">
                        <td className="capitalize text-base text-center p-2">
                          {book.name}
                        </td>
                        <td className="capitalize text-base text-center p-2">
                          {book.author}
                        </td>
                        <td className="capitalize text-base text-center p-2 flex flex-col">
                          {book.genres.slice(0, 3).map((genre) => (
                            <span>{genre}</span>
                          ))}
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr key={book.name} className="bg-[#CF7B71]">
                        <td className="capitalize text-base text-center p-2">
                          {book.name}
                        </td>
                        <td className="capitalize text-base text-center p-2">
                          {book.author}
                        </td>
                        <td className="capitalize text-base text-center p-2 flex flex-col">
                          {book.genres.slice(0, 3).map((genre) => (
                            <span>{genre}</span>
                          ))}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
            <Button
              button={{
                onClick: () => setToggleCustomDisplay(false),
                text: "Hide Your Custom Books",
              }}
            />
          </div>
        ) : (
          <Button
            button={{
              onClick: () => setToggleCustomDisplay(true),
              text: "Display Your Custom Books",
            }}
          />
        )}
      </section>
      <Footer />
    </main>
  );
}
