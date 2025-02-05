import {
  blockDiscount as blockTheDiscount,
  fetchAllDiscounts,
  unblockDiscount as unblockTheDiscount,
  deleteDiscount as deleteTheDiscount,
  updateDiscount as updateTheDiscount,
  updatePassword as updateThePassword,
  createDiscount as createTheDiscount,
  updateImage as updateTheImage,
  fetchDiscount,
} from "@/app/components/services/api.discount";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDiscount = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["Discounts"],
    queryFn: fetchAllDiscounts,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isPending, error };
};

export const useCurrentDiscount = () => {
  const {
    data: currDiscount,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["Discount"],
    queryFn: fetchDiscount,
    staleTime: 1 * 1000,
  });

  return { currDiscount, isFetching, error };
};

export const useBlockDiscount = () => {
  const queryClient = useQueryClient();

  const { mutate: blockDiscount, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheDiscount,
    onSuccess: () => {
      queryClient.invalidateQueries(["Discounts"]);
      toast.success("Discount blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { blockDiscount, isBlocking };
};

export const useUnblockDiscount = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockDiscount, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheDiscount,
    onSuccess: () => {
      queryClient.invalidateQueries(["Discounts"]);
      toast.success("Discount blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { unblockDiscount, isUnblocking };
};

export const useDeleteDiscount = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteDiscount, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheDiscount,
    onSuccess: () => {
      queryClient.invalidateQueries(["Discounts"]);
      toast.success("Discount deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteDiscount, isDeleting };
};

export const useUpdateDiscount = () => {
  const queryClient = useQueryClient();
  const { mutate: updateDiscount, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheDiscount,
    onSuccess: () => {
      queryClient.invalidateQueries(["Discounts"]);
      toast.success("Discount updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateDiscount, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Discounts"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateDiscount = () => {
  const queryClient = useQueryClient();
  const { mutate: createDiscount, isLoading: isCreating } = useMutation({
    mutationFn: createTheDiscount,
    onSuccess: () => {
      queryClient.invalidateQueries(["Discounts"]);
      toast.success("Discount created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createDiscount, isCreating };
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
