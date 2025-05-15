import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTicket as deleteTicketAPI } from "../../services/apiTickets";
import toast from "react-hot-toast";

export function useDeleteTicket() {
  const queryClient = useQueryClient();

  const {isLoading: isDeleting, mutate: deleteTicket} = useMutation({
    mutationFn: deleteTicketAPI,
    onSuccess: (data, id) => {
      console.log("Ticket deleted successfully:", data);
      toast.success("Ticket deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });

  },
    onError: (error) => toast.error("Error deleting ticket"),
  });

  return {
    deleteTicket,
    isDeleting,
  };
}
