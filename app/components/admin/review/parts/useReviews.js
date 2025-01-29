import {
  fetchAllReviews,
  deleteReview as deleteTheReview,
  updateReview as updateTheReview,
  updatePassword as updateThePassword,
  createReview as createTheReview,
  updateImage as updateTheImage,
  changeStatus as changeTheStatus,
  fetchReview,
} from "@/app/components/services/api.review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useReview = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["Reviews"],
    queryFn: fetchAllReviews,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isPending, error };
};

export const useCurrentReview = () => {
  const {
    data: currReview,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["Review"],
    queryFn: fetchReview,
    staleTime: 1 * 1000,
  });

  return { currReview, isFetching, error };
};

export const useChangeStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: changeStatus, isPening: isChanging } = useMutation({
    mutationFn: changeTheStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["Reviews"]);
      toast.success("Review deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { changeStatus, isChanging };
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteReview, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheReview,
    onSuccess: () => {
      queryClient.invalidateQueries(["Reviews"]);
      toast.success("Review deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteReview, isDeleting };
};

export const useUpdateReview = () => {
  const queryClient = useQueryClient();
  const { mutate: updateReview, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheReview,
    onSuccess: () => {
      queryClient.invalidateQueries(["Reviews"]);
      toast.success("Review updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateReview, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Reviews"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateReview = () => {
  const queryClient = useQueryClient();
  const { mutate: createReview, isLoading: isCreating } = useMutation({
    mutationFn: createTheReview,
    onSuccess: () => {
      queryClient.invalidateQueries(["Reviews"]);
      toast.success("Review created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createReview, isCreating };
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
