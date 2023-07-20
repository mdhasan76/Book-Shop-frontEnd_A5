import { Link } from "react-router-dom";

const BookesDetails = () => {
  const handleDelete = () => {
    const confirmation = window.confirm("do you want to delete this book?");
    if (confirmation) {
      console.log("delete confirmed");
    }
  };
  const id = 0;
  return (
    <div className="py-10 max-w-2xl mx-auto p-5">
      <div className="mb-4">
        <h2>Title: ABC</h2>
        <p>Author: Hasan</p>
        <p>Genre: Rokomari</p>
        <p>Publications Date: 2323</p>
        <div className="text-right">
          <Link
            to={`/edit-book/${id}`}
            className="bg-gray-400 px-3 py-2 rounded mr-2"
          >
            Edit
          </Link>
          <button
            className="bg-red-400 px-3 py-2 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="border-t-2">
        <h3 className="font-semibold mt-4">Review</h3>
        <div className="mt-5">
          <p>Review 1</p>
          <p>Review 1</p>
          <p>Review 1</p>
          <p>Review 1</p>
          <p>Review 1</p>
        </div>
      </div>
    </div>
  );
};

export default BookesDetails;
