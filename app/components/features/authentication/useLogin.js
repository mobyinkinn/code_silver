import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/api.auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, password }) => loginApi({ username, password }),
    onSuccess: (admin) => {
      queryClient.setQueryData(["admin"], admin.data.admin);
      router.push("/admin/adminuser");
    },
    onError: (err) => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
