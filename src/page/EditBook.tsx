import { useState } from "react";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publishedDate, setpublishedDate] = useState("");
  const handleRegister = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(title, genre, author, publishedDate);
  };

  return (
    <div className="hero bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  my-10">
        <h1 className="py-7 text-3xl font-bold text-center">
          {" "}
          Update book Form
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="book title"
              className="input input-bordered"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              placeholder="author"
              className="input input-bordered"
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <input
              type="text"
              placeholder="Genre"
              className="input input-bordered"
              onChange={(e) => setGenre(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Published Date</span>
            </label>
            <input
              type="text"
              placeholder="June 8, 1949"
              className="input input-bordered"
              onChange={(e) => setpublishedDate(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-3">
            <button className="mt-2 px-3 py-2 bg-slate-300 text-[#003a6c] hover:bg-[#0b3962] hover:text-white duration-500   font-semibold">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
