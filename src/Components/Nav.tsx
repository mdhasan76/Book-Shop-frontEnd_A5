import { Link } from "react-router-dom";

const Nav = () => {
  const user = null;

  const userLogOut = () => {
    console.log("logout");
  };
  return (
    <section className="sticky top-0 z-30 font-semibold bg-[#1a4e7b]">
      <div className="navbar text-white max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown text-black">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/books"}>All Bookes</Link>
              </li>
              <li>
                <Link to={"/add-new-book"}>Add Book</Link>
              </li>
              {user && (
                <>
                  <li>
                    <Link to={"/myreviews"}>My Reviews</Link>
                  </li>
                  <li>
                    <Link to={"/addservice"}>Add Service</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <p className="btn btn-ghost normal-case text-xl">Book Shop</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/books"}>All Books</Link>
            </li>
            <li>
              <Link to={"/add-new-book"}>Add Book</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to={"/myreviews"}>My Reviews</Link>
                </li>
                <li>
                  <Link to={"/addservice"}>Add Service</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                onClick={userLogOut}
                className="bg-cyan-600 py-2 px-4 rounded mr-2 hover:bg-rose-600 duration-300"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link
              to={"/login"}
              className="bg-cyan-600 py-2 px-4 rounded mr-2 hover:bg-cyan-400 duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Nav;
