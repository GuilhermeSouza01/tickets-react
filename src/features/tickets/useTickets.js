import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constans";
import { getTickets } from "../../services/apiTickets";

export function useTickets() {

  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: {data: tickets, count} = {},
    error,
  } = useQuery({
    queryKey: ["tickets", page],
    queryFn: () => getTickets({page}),
    keepPreviousData: true,
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

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
