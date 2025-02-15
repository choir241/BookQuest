export interface Book {
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
    <section onClick={() => onClick()} className="flex">
      <img className="w-50" src={book.image} alt={book.imageAlt} />
      <section className="flex flex-col">
      <h2>{book.name}</h2>
      <h2>{book.author}</h2>
      <div className="flex">
      {book.genres.map((genre) => {
        return <span key={genre}>{genre}</span>;
      })}
      </div>
      </section>
    </section>
  );
}
