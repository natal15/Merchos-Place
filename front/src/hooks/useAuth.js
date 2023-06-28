import { useMutation, useQueryClient } from "react-query";
import { auth } from "../services";

export const useAuth = () => {
  const queryClient = useQueryClient();
  


  const { mutate: login } = useMutation({
    mutationFn: auth.login,
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });

  const { mutate: logout } = useMutation({
    mutationFn: auth.logout,
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });

  return { login, logout };
};