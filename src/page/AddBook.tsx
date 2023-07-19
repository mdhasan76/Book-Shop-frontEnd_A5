import { useState } from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const handleRegister = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const publishDate = new Date();
    console.log(title, genre, author, publishDate);
  };

  return (
    <div className="hero bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  my-10">
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
          <div className="form-control mt-3">
            <button className="mt-2 px-3 py-2 bg-slate-300 text-[#003a6c] hover:bg-[#0b3962] hover:text-white duration-500   font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
