import {
  blockCustomer as blockTheCustomer,
  fetchAllCustomers,
  unblockCustomer as unblockTheCustomer,
  deleteCustomer as deleteTheCustomer,
  updateCustomer as updateTheCustomer,
  updatePassword as updateThePassword,
  createCustomer as createTheCustomer,
  fetchCustomer,
} from "@/app/components/services/api.customer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCustomer = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Customers"],
    queryFn: fetchAllCustomers,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isLoading, error };
};

export const useCurrentCustomer = () => {
  const {
    data: currCustomer,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["Customer"],
    queryFn: fetchCustomer,
    staleTime: 1 * 1000,
  });

  return { currCustomer, isFetching, error };
};

export const useBlockCustomer = () => {
  const queryClient = useQueryClient();

  const { mutate: blockCustomer, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries(["Customers"]);
      toast.success("Customer blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { blockCustomer, isBlocking };
};

export const useUnblockCustomer = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockCustomer, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries(["Customers"]);
      toast.success("Customer blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { unblockCustomer, isUnblocking };
};

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteCustomer, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries(["Customers"]);
      toast.success("Customer deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteCustomer, isDeleting };
};

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();
  const { mutate: updateCustomer, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries(["Customers"]);
      toast.success("Customer updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateCustomer, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Customers"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();
  const { mutate: createCustomer, isLoading: isCreating } = useMutation({
    mutationFn: createTheCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries(["Customers"]);
      toast.success("Customer created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createCustomer, isCreating };
};
