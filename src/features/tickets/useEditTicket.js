import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatedTicket } from "../../services/apiTickets";
import toast from "react-hot-toast";

export function useEditTicket() {
  const queryClient = useQueryClient();

  const { mutate: updateTicket, isLoading: isUpdating } = useMutation({
    mutationFn: ({id, data}) => updatedTicket({id, data}),
    onSuccess: () => {
      toast.success("Ticket updated successfully");
      queryClient.invalidateQueries({queryKey: ["tickets"]});
    },
    onError: (error) => toast.error(error.message),
  });

  return {isUpdating, updateTicket};
}
