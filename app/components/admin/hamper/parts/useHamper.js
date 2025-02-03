import {
  blockHamper as blockTheHamper,
  fetchAllHampers,
  unblockHamper as unblockTheHamper,
  deleteHamper as deleteTheHamper,
  updateHamper as updateTheHamper,
  updatePassword as updateThePassword,
  createHamper as createTheHamper,
  updateImage as updateTheImage,
  fetchHamper,
} from "@/app/components/services/api.hamper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useHamper = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["Hampers"],
    queryFn: fetchAllHampers,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isPending, error };
};

export const useBlockHamper = () => {
  const queryClient = useQueryClient();

  const { mutate: blockHamper, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheHamper,
    onSuccess: () => {
      queryClient.invalidateQueries(["Hampers"]);
      toast.success("Hamper blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { blockHamper, isBlocking };
};

export const useUnblockHamper = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockHamper, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheHamper,
    onSuccess: () => {
      queryClient.invalidateQueries(["Hampers"]);
      toast.success("Hamper blocked successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to block admin: ", error);
      toast.error("Failed to block admin.");
    },
  });

  return { unblockHamper, isUnblocking };
};

export const useDeleteHamper = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteHamper, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheHamper,
    onSuccess: () => {
      queryClient.invalidateQueries(["Hampers"]);
      toast.success("Hamper deleted successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to delete admin: ", error);
      toast.error("Failed to delete admin.");
    },
  });

  return { deleteHamper, isDeleting };
};

export const useUpdateHamper = () => {
  const queryClient = useQueryClient();
  const { mutate: updateHamper, isLoading: isUpdating } = useMutation({
    mutationFn: updateTheHamper,
    onSuccess: () => {
      queryClient.invalidateQueries(["Hampers"]);
      toast.success("Hamper updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update admin: ", error);
      toast.error("Failed to update admin.");
    },
  });

  return { updateHamper, isUpdating };
};

export const useUpdatePassword = () => {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateThePassword,
    onSuccess: () => {
      queryClient.invalidateQueries(["Hampers"]);
      toast.success("Password updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update password: ", error);
      toast.error("Failed to update password.");
    },
  });

  return { updatePassword, isUpdating };
};

export const useCreateHamper = () => {
  const queryClient = useQueryClient();
  const { mutate: createHamper, isPending: isCreating } = useMutation({
    mutationFn: createTheHamper,
    onSuccess: () => {
      queryClient.invalidateQueries(["Hampers"]);
      toast.success("Hamper created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create admin: ", error);
      toast.error("Failed to create admin.");
    },
  });
  return { createHamper, isCreating };
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
