import {
  blockOrder as blockTheOrder,
  fetchAllOrders,
  unblockOrder as unblockTheOrder,
  deleteOrder as deleteTheOrder,
  updateOrder as updateTheOrder,
  updatePassword as updateThePassword,
  createOrder as createTheOrder,
  updateImage as updateTheImage,
  fetchOrder,
} from "@/app/components/services/api.order";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useOrder = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["Orders"],
    queryFn: fetchAllOrders,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isPending, error };
};

export const useCurrentOrder = () => {
  const {
    data: currOrder,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["Order"],
    queryFn: fetchOrder,
    staleTime: 1 * 1000,
  });

  return { currOrder, isFetching, error };
};

export const useBlockOrder = () => {
  const queryClient = useQueryClient();

  const { mutate: blockOrder, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(["Orders"]);
      toast.success("Order blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { blockOrder, isBlocking };
};

export const useUnblockOrder = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockOrder, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(["Orders"]);
      toast.success("Order blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { unblockOrder, isUnblocking };
};

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteOrder, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(["Orders"]);
      toast.success("Order deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteOrder, isDeleting };
};

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();
  const { mutate: updateOrder, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(["Orders"]);
      toast.success("Order updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateOrder, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Orders"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  const { mutate: createOrder, isLoading: isCreating } = useMutation({
    mutationFn: createTheOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(["Orders"]);
      toast.success("Order created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createOrder, isCreating };
};

export const useUpdateImage = () => {
  const queryClient = useQueryClient();

  const { mutate: updateImage, isPending: isUpdatingImage } = useMutation({
    mutationFn: updateTheImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["Departments"]);
      toast.success("Department updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update department: ", error);
      toast.error("Failed to update department. Please try again.");
    },
  });

  return { updateImage, isUpdatingImage };
};
