import Button from "../components/Button";
import { useState, useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import Label from "../components/Label";
import Select from "../components/Select";
import { genreOptions } from "../static/genres";
import { addBook } from "../backend/database/addBook";
import { Book } from "../components/BookCard";
import { UserContext } from "../middleware/UserContext";
interface IBook extends Book {
  file: File;
}

interface ISubmit {
  book: IBook;
  userId: string;
}

async function submitData({ submit }: { submit: ISubmit }) {
  addBook({
    file: submit.book.file,
    userId: submit.userId,
    bookData: {
      image: submit.book.image,
      imageAlt: submit.book.imageAlt,
      genres: submit.book.genres,
      author: submit.book.author,
      name: submit.book.name,
    },
  });
}

export default function AddBook() {
  const [name, setName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [altText, setAltText] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);
  const [image, setImage] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);

  const { account } = useContext(UserContext);

  useEffect(() => {
    console.log(image);
  }, [image, loading]);

  return (
    <main className="p-2">
      <Header />
      <h1 className="mb-6 text-5xl">Add Book</h1>

      <section className="w-full justify-center flex">
        <form className="w-90 py-10 flex flex-col items-center justify-center bg-[#F1B6CA] shadow-[10px_10px_10px_#C9ABC5] rounded-[10px]">
          <section className="mb-4 flex flex-col items-start">
            <Label
              label={{ className: "mb-2", text: "Book name", htmlFor: "name" }}
            />

            <Input
              input={{
                type: "text",
                id: "",
                name: "name",
                onChange: (e) => setName(e),
                placeholder: "name",
              }}
            />
          </section>

          <section className="mb-4 flex flex-col items-start">
            <Label
              label={{ className: "mb-2", text: "Author", htmlFor: "author" }}
            />

            <Input
              input={{
                type: "text",
                id: "author",
                name: "author",
                onChange: (e) => setAuthor(e),
                placeholder: "author",
              }}
            />
          </section>

          <section className="mb-4 flex flex-col items-start">
            <Label
              label={{
                className: "mb-2",
                text: "Image alt text",
                htmlFor: "altText",
              }}
            />

            <Input
              input={{
                type: "text",
                id: "altText",
                name: "image alt text",
                onChange: (e) => setAltText(e),
                placeholder: "image alt text",
              }}
            />
          </section>

          <section className="mb-4 flex flex-col items-start">
            <Label
              label={{
                className: "mb-2",
                text: "Upload book cover",
                htmlFor: "image",
              }}
            />

            <input
              className="cursor-pointer rounded-[10px] border-2 p-2 border-[#BC546B]"
              type="file"
              id="image"
              name="image"
              onChange={(e) => {
                setLoading(true);
                if (e.target.files) {
                  setImage(e.target.files[0]);
                  setLoading(false);
                }
              }}
            />
          </section>

          <section className="mb-4 flex flex-col items-center justify-center">
            <Label
              label={{
                className: "mb-2",
                text: "Select genre(s)",
                htmlFor: "genre",
              }}
            />

            {/* (To grab multiple values, use cmd/ctr + click on genres) */}
            <Select
              select={{
                multiple: true,
                options: genreOptions,
                onChange: (e) => setGenres(e),
                id: "genre",
              }}
            />
          </section>

          <Button
            button={{
              text: "Add book",
              onClick: () =>
                submitData({
                  submit: {
                    userId: account.$id,
                    book: {
                      file: image as File,
                      image: "",
                      imageAlt: altText,
                      genres: genres,
                      author: author,
                      name: name,
                    },
                  },
                }),
            }}
          />
        </form>
      </section>

      <Footer />
    </main>
  );
}
