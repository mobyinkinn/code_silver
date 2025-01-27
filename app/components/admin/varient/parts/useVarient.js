import {
  blockVarient as blockTheVarient,
  fetchAllVarients,
  unblockVarient as unblockTheVarient,
  deleteVarient as deleteTheVarient,
  updateVarient as updateTheVarient,
  updatePassword as updateThePassword,
  createVarient as createTheVarient,
  updateImage as updateTheImage,
  fetchVarient,
} from "@/app/components/services/api.varient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useVarient = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Varients"],
    queryFn: fetchAllVarients,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isLoading, error };
};

export const useBlockVarient = () => {
  const queryClient = useQueryClient();

  const { mutate: blockVarient, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheVarient,
    onSuccess: () => {
      queryClient.invalidateQueries(["Varients"]);
      toast.success("Varient blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { blockVarient, isBlocking };
};

export const useUnblockVarient = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockVarient, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheVarient,
    onSuccess: () => {
      queryClient.invalidateQueries(["Varients"]);
      toast.success("Varient blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { unblockVarient, isUnblocking };
};

export const useDeleteVarient = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteVarient, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheVarient,
    onSuccess: () => {
      queryClient.invalidateQueries(["Varients"]);
      toast.success("Varient deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteVarient, isDeleting };
};

export const useUpdateVarient = () => {
  const queryClient = useQueryClient();
  const { mutate: updateVarient, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheVarient,
    onSuccess: () => {
      queryClient.invalidateQueries(["Varients"]);
      toast.success("Varient updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateVarient, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Varients"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateVarient = () => {
  const queryClient = useQueryClient();
  const { mutate: createVarient, isLoading: isCreating } = useMutation({
    mutationFn: createTheVarient,
    onSuccess: () => {
      queryClient.invalidateQueries(["Varients"]);
      toast.success("Varient created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createVarient, isCreating };
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
