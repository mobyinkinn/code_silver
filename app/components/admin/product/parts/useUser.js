import {
  blockProduct as blockTheProduct,
  fetchAllProducts,
  unblockProduct as unblockTheProduct,
  deleteProduct as deleteTheProduct,
  updateProduct as updateTheProduct,
  updatePassword as updateThePassword,
  createProduct as createTheProduct,
  updateImage as updateTheImage,
  fetchProduct,
} from "@/app/components/services/api.product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useProduct = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["Products"],
    queryFn: fetchAllProducts,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isPending, error };
};

export const useCurrentProduct = () => {
  const {
    data: currProduct,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["Product"],
    queryFn: fetchProduct,
    staleTime: 1 * 1000,
  });

  return { currProduct, isFetching, error };
};

export const useBlockProduct = () => {
  const queryClient = useQueryClient();

  const { mutate: blockProduct, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["Products"]);
      toast.success("Product blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { blockProduct, isBlocking };
};

export const useUnblockProduct = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockProduct, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["Products"]);
      toast.success("Product blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { unblockProduct, isUnblocking };
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteProduct, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["Products"]);
      toast.success("Product deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteProduct, isDeleting };
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const { mutate: updateProduct, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["Products"]);
      toast.success("Product updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateProduct, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Products"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const { mutate: createProduct, isLoading: isCreating } = useMutation({
    mutationFn: createTheProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["Products"]);
      toast.success("Product created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createProduct, isCreating };
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
