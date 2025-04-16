import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div>
      <nav>
        <div className="container-fluid px-5 rounded-3">
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2 me-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={searchHandler}
              value={search}
            />
            <button
              className="btn bg-light rounded-3 d-flex align-items-center justify-content-center fs-5"
              type="submit"
              onClick={() => (window.location.href = `?city=${search}`)}
            >
              <IoSearch />
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
