import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data, error, isFetching } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

    const user = data
    ? {
        id: data.id,
        name: data.name,
        email: data.email,
        isManager: data.is_manager,
      }
    : null;



  const isAuthenticated = !!user;

  return {
    isLoading,
    user,
    error,
    isFetching,
    isAuthenticated,
  };
}
