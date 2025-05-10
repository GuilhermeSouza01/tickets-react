import { useParams } from "react-router-dom";
import { getTicketById } from "../../services/apiTickets";
import { useQuery } from "@tanstack/react-query";

export function useTicket() {

  const { ticketId } = useParams();

  const {isLoading,
    data: ticket,
    error
    } = useQuery({
    queryKey: ["ticket", ticketId],
    queryFn: () => getTicketById(ticketId),
    retry: false,
    });

    return {
      isLoading,
      ticket,
      error
    };
}
