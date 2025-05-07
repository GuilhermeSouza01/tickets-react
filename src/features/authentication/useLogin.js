import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({email, password}) => loginApi({email, password}),
    onSuccess: (user) => {
      console.log("Login successful:", user);
      queryClient.setQueryData(["user"], user);
      navigate("/tickets", { replace: true });
    },
    onError: (error) => {
      console.error("Login error:", error);

    },
  });

  return {
    login,
    isLoading,
  };
}
