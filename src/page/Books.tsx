import { useEffect, useState } from "react";
import { IBook } from "../types/globalTypes";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

const Books = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const { data } = useAppSelector((state) => state.book);
  console.log(data, "Book state");

  // ! temp code
  useEffect(() => {
    void fetch("books.json")
      .then((res) => res.json())
      .then((data: IBook[]) => setBooks(data));
  }, []);
  // ! temp code end

  return (
    <div className="overflow-x-auto max-w-5xl mx-auto my-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Author</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Published Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book: IBook, i: number) => (
            <tr className="hover">
              <th>{i + 1}</th>
              <td>{book.author}</td>
              <td>{book.title}</td>
              <td>{book.genre}</td>
              <td>{book.publicationDate}</td>
              <td>
                <Link
                  to={`/book/${i}`}
                  className="cursor-pointer bg-gray-200 px-3 py-2 rounded"
                >
                  details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
