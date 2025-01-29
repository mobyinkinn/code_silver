import {
  blockBlog as blockTheBlog,
  fetchAllBlogs,
  unblockBlog as unblockTheBlog,
  deleteBlog as deleteTheBlog,
  updateBlog as updateTheBlog,
  updatePassword as updateThePassword,
  createBlog as createTheBlog,
  updateImage as updateTheImage,
  fetchBlog,
} from "@/app/components/services/api.blog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useBlog = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["Blogs"],
    queryFn: fetchAllBlogs,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isPending, error };
};

export const useCurrentBlog = () => {
  const {
    data: currBlog,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["Blog"],
    queryFn: fetchBlog,
    staleTime: 1 * 1000,
  });

  return { currBlog, isFetching, error };
};

export const useBlockBlog = () => {
  const queryClient = useQueryClient();

  const { mutate: blockBlog, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["Blogs"]);
      toast.success("Blog blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { blockBlog, isBlocking };
};

export const useUnblockBlog = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockBlog, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["Blogs"]);
      toast.success("Blog blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { unblockBlog, isUnblocking };
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBlog, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["Blogs"]);
      toast.success("Blog deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteBlog, isDeleting };
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  const { mutate: updateBlog, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["Blogs"]);
      toast.success("Blog updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateBlog, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Blogs"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  const { mutate: createBlog, isLoading: isCreating } = useMutation({
    mutationFn: createTheBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["Blogs"]);
      toast.success("Blog created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createBlog, isCreating };
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
