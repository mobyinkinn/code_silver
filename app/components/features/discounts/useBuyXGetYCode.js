import {
  blockBuyXGetYCode as blockTheBuyXGetYCode,
  fetchAllBuyXGetYCodes,
  unblockBuyXGetYCode as unblockTheBuyXGetYCode,
  deleteBuyXGetYCode as deleteTheBuyXGetYCode,
  updateBuyXGetYCode as updateTheBuyXGetYCode,
  createBuyXGetYCode as createTheBuyXGetYCode,
  fetchBuyXGetYCode,
} from "@/app/components/services/api.buyXGetYCode";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useBuyXGetYCode = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["BuyXGetYCodes"],
    queryFn: fetchAllBuyXGetYCodes,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isPending, error };
};

export const useCurrentBuyXGetYCode = () => {
  const {
    data: currBuyXGetYCode,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["BuyXGetYCode"],
    queryFn: fetchBuyXGetYCode,
    staleTime: 1 * 1000,
  });

  return { currBuyXGetYCode, isFetching, error };
};

export const useBlockBuyXGetYCode = () => {
  const queryClient = useQueryClient();

  const { mutate: blockBuyXGetYCode, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheBuyXGetYCode,
    onSuccess: () => {
      queryClient.invalidateQueries(["BuyXGetYCodes"]);
      toast.success("BuyXGetYCode blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { blockBuyXGetYCode, isBlocking };
};

export const useUnblockBuyXGetYCode = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockBuyXGetYCode, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheBuyXGetYCode,
    onSuccess: () => {
      queryClient.invalidateQueries(["BuyXGetYCodes"]);
      toast.success("BuyXGetYCode blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { unblockBuyXGetYCode, isUnblocking };
};

export const useDeleteBuyXGetYCode = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBuyXGetYCode, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheBuyXGetYCode,
    onSuccess: () => {
      queryClient.invalidateQueries(["BuyXGetYCodes"]);
      toast.success("BuyXGetYCode deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteBuyXGetYCode, isDeleting };
};

export const useUpdateBuyXGetYCode = () => {
  const queryClient = useQueryClient();
  const { mutate: updateBuyXGetYCode, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheBuyXGetYCode,
    onSuccess: () => {
      queryClient.invalidateQueries(["BuyXGetYCodes"]);
      toast.success("BuyXGetYCode updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateBuyXGetYCode, isUpdating };
};

export const useCreateBuyXGetYCode = () => {
  const queryClient = useQueryClient();
  const { mutate: createBuyXGetYCode, isLoading: isCreating } = useMutation({
    mutationFn: createTheBuyXGetYCode,
    onSuccess: () => {
      queryClient.invalidateQueries(["BuyXGetYCodes"]);
      toast.success("BuyXGetYCode created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createBuyXGetYCode, isCreating };
};
