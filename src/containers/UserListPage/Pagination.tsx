import React from "react";
import { PaginationItem } from "./PaginationItem";

const Pagination = ({ totalPages, page }) => {
  const pages = Array.from(Array(totalPages).keys());
  return (
    <div>
      {pages.map((e, index) => {
        return (
          <PaginationItem
            key={index}
            page={index + 1}
            actived={page === index + 1}
          />
        );
      })}
    </div>
  );
};
export { Pagination };
