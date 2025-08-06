import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <>
      <style>
        {`
  .hover-button {
  background-color: #fff;
  color: #000;
}
.hover-button:hover {
  background-color: #fff;
  color: #000;
}

  `}
      </style>
      <div>
        <nav>
          <div className="container-fluid px-3  rounded-3">
            <form
              className="d-flex rounded-5"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control  rounded-4 me-4 py-3 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={searchHandler}
                value={search}
              />
              <button
                className="btn rounded-4 px-4  d-flex align-items-center hover-button justify-content-center fs-5"
                type="submit"
                onClick={() => (window.location.href = `?city=${search}`)}
              >
                <IoSearch />
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
