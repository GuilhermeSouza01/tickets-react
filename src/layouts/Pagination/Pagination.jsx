/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constans";
import { Buttons, PaginationButton, PaginationInfo, StyledPagination } from "./styles";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export function Pagination({count}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);

  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <PaginationInfo>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span> {" "}
        of <span>{count}</span> results
      </PaginationInfo>
      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>
        <PaginationButton onClick={nextPage} disabled={currentPage === pageCount}>
        <span>Next</span>
        <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
};
