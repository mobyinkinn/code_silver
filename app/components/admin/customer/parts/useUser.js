import {
  blockCustomer as blockTheAdmin,
  fetchAllCustomers,
  unblockCustomer as unblockTheAdmin,
  deleteCustomer as deleteTheAdmin,
  updateCustomer as updateTheAdmin,
  updatePassword as updateThePassword,
  createCustomer as createTheAdmin,
  fetchCustomer,
} from "@/app/components/services/api.customer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAdmin = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Admins"],
    queryFn: fetchAllCustomers,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isLoading, error };
};

export const useCurrentAdmin = () => {
  const {
    data: currAdmin,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["Admin"],
    queryFn: fetchAdmin,
    staleTime: 1 * 1000,
  });

  return { currAdmin, isFetching, error };
};

export const useBlockAdmin = () => {
  const queryClient = useQueryClient();

  const { mutate: blockAdmin, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(["Admins"]);
      toast.success("Admin blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { blockAdmin, isBlocking };
};

export const useUnblockAdmin = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockAdmin, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(["Admins"]);
      toast.success("Admin blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { unblockAdmin, isUnblocking };
};

export const useDeleteAdmin = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteAdmin, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(["Admins"]);
      toast.success("Admin deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteAdmin, isDeleting };
};

export const useUpdateAdmin = () => {
  const queryClient = useQueryClient();
  const { mutate: updateAdmin, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(["Admins"]);
      toast.success("Admin updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateAdmin, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Admins"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateAdmin = () => {
  const queryClient = useQueryClient();
  const { mutate: createAdmin, isLoading: isCreating } = useMutation({
    mutationFn: createTheAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(["Admins"]);
      toast.success("Admin created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createAdmin, isCreating };
};
