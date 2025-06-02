import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constans";
import { getTickets } from "../../services/apiTickets";

export function useTickets() {

  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
  !filterValue || filterValue === "all"
  ? null
  : {field: "status", value: filterValue};

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "createdAt-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };


  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["tickets", filter, sortBy, page],
    queryFn: () => getTickets({filter, sortBy, page}),
    keepPreviousData: true,
  });

  const tickets = data?.data || [];
  const total = data?.total || 0;
  const lastPage = data?.last_page || 0;

  const pageCount = lastPage || Math.ceil(total / PAGE_SIZE);
  const count = total || tickets?.length || 0;

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["tickets", page + 1],
      queryFn: () => getTickets({page: page + 1}),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["tickets", page - 1],
      queryFn: () => getTickets({page: page - 1}),
    });
  }

  return {
    isLoading,
    tickets,
    error,
    count
  }

}
