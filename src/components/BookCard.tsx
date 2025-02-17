export interface Book {
  userId?: string;
  image: string;
  imageAlt: string;
  genres: string[];
  author: string;
  name: string;
}

export default function BookCard({
  book,
  onClick,
}: {
  book: Book;
  onClick: () => void;
}) {
  return (
    <section onClick={() => onClick()} className="book-hover cursor-pointer shadow-[10px_10px_10px_#C9ABC5] min-w-[850px] flex items-center bg-[#F1B6CA] p-4 my-6 rounded-[10px]">
      <img className="w-40 mr-4" src={book.image} alt={book.imageAlt} />
      <section className="flex flex-col p-4 items-start">
        <h2 className="text-4xl mb-2">{book.name}</h2>
        <h3 className="text-3xl">{book.author}</h3>
        <div className="flex mt-6 items-center justify-between">
          {book.genres.map((genre) => {
            return (
              <span className="text-base text-[#F1E4EE] p-2 bg-[#BC546B] rounded-[10px] mr-2" key={genre}>
                {genre}
              </span>
            );
          })}
        </div>
      </section>
    </section>
  );
}
