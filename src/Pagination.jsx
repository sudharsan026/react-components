import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={
            page === currentPage ? "btn btn-primary" : "btn btn-secondary"
          }
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
