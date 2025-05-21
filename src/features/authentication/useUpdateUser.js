import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: editUser, isLoading: isEditing } = useMutation({
    mutationFn: ({ password, fullName, avatar }) =>
      updatCurrentUser({ password, fullName, avatar }),
    onSuccess: () => {
      toast.success("User successfully edit");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editUser, isEditing };
}
