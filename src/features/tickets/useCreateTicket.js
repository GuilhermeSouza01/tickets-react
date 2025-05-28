import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket as createTicketApi } from "../../services/apiTickets";
import toast from "react-hot-toast";

export function useCreateTicket() {
  const queryClient = useQueryClient();

  const { mutate: createTicket, isLoading: isCreating } = useMutation({
    mutationFn: (data) => createTicketApi(data),
    onSuccess: () => {
      toast.success("Ticket created successfully");
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isCreating, createTicket };
}
