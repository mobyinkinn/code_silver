import {
  blockCart as blockTheCart,
  fetchAllCarts,
  unblockCart as unblockTheCart,
  deleteCart as deleteTheCart,
  updateCart as updateTheCart,
  updatePassword as updateThePassword,
  createCart as createTheCart,
  updateImage as updateTheImage,
  fetchCart,
} from "@/app/components/services/api.cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCart = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["Carts"],
    queryFn: fetchAllCarts,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isPending, error };
};

export const useCurrentCart = () => {
  const {
    data: currCart,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["Cart"],
    queryFn: fetchCart,
    staleTime: 1 * 1000,
  });

  return { currCart, isFetching, error };
};

export const useBlockCart = () => {
  const queryClient = useQueryClient();

  const { mutate: blockCart, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["Carts"]);
      toast.success("Cart blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { blockCart, isBlocking };
};

export const useUnblockCart = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockCart, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["Carts"]);
      toast.success("Cart blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { unblockCart, isUnblocking };
};

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteCart, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["Carts"]);
      toast.success("Cart deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteCart, isDeleting };
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  const { mutate: updateCart, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["Carts"]);
      toast.success("Cart updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateCart, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Carts"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateCart = () => {
  const queryClient = useQueryClient();
  const { mutate: createCart, isLoading: isCreating } = useMutation({
    mutationFn: createTheCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["Carts"]);
      toast.success("Cart created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createCart, isCreating };
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
