import {
  blockCollection as blockTheCollection,
  fetchAllCollections,
  unblockCollection as unblockTheCollection,
  deleteCollection as deleteTheCollection,
  updateCollection as updateTheCollection,
  updatePassword as updateThePassword,
  createCollection as createTheCollection,
  fetchCollection,
} from "@/app/components/services/api.collection";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCollection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Collections"],
    queryFn: fetchAllCollections,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isLoading, error };
};

export const useCurrentCollection = () => {
  const {
    data: currCollection,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["Collection"],
    queryFn: fetchCollection,
    staleTime: 1 * 1000,
  });

  return { currCollection, isFetching, error };
};

export const useBlockCollection = () => {
  const queryClient = useQueryClient();

  const { mutate: blockCollection, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheCollection,
    onSuccess: () => {
      queryClient.invalidateQueries(["Collections"]);
      toast.success("Collection blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { blockCollection, isBlocking };
};

export const useUnblockCollection = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockCollection, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheCollection,
    onSuccess: () => {
      queryClient.invalidateQueries(["Collections"]);
      toast.success("Collection blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { unblockCollection, isUnblocking };
};

export const useDeleteCollection = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteCollection, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheCollection,
    onSuccess: () => {
      queryClient.invalidateQueries(["Collections"]);
      toast.success("Collection deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteCollection, isDeleting };
};

export const useUpdateCollection = () => {
  const queryClient = useQueryClient();
  const { mutate: updateCollection, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheCollection,
    onSuccess: () => {
      queryClient.invalidateQueries(["Collections"]);
      toast.success("Collection updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateCollection, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Collections"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateCollection = () => {
  const queryClient = useQueryClient();
  const { mutate: createCollection, isLoading: isCreating } = useMutation({
    mutationFn: createTheCollection,
    onSuccess: () => {
      queryClient.invalidateQueries(["Collections"]);
      toast.success("Collection created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createCollection, isCreating };
};
