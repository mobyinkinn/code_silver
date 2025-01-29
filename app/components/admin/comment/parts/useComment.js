import {
  fetchAllComments,
  deleteComment as deleteTheComment,
  updateComment as updateTheComment,
  updatePassword as updateThePassword,
  createComment as createTheComment,
  updateImage as updateTheImage,
  changeStatus as changeTheStatus,
  fetchComment,
} from "@/app/components/services/api.comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useComment = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["Comments"],
    queryFn: fetchAllComments,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isPending, error };
};

export const useCurrentComment = () => {
  const {
    data: currComment,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["Comment"],
    queryFn: fetchComment,
    staleTime: 1 * 1000,
  });

  return { currComment, isFetching, error };
};

export const useChangeStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: changeStatus, isPening: isChanging } = useMutation({
    mutationFn: changeTheStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["Comments"]);
      toast.success("Comment deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { changeStatus, isChanging };
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteComment, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["Comments"]);
      toast.success("Comment deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteComment, isDeleting };
};

export const useUpdateComment = () => {
  const queryClient = useQueryClient();
  const { mutate: updateComment, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["Comments"]);
      toast.success("Comment updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateComment, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Comments"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  const { mutate: createComment, isLoading: isCreating } = useMutation({
    mutationFn: createTheComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["Comments"]);
      toast.success("Comment created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createComment, isCreating };
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
