import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteRadnik } from "../../services/apiRadnici";

function useDeleteRadnik() {
  const queryClient = useQueryClient();
  const { mutate: izbrisiRadnika, isLoading } = useMutation({
    mutationFn: (id) => deleteRadnik(id),
    onSuccess: () => {
      toast.success("Radnik uspesno izbrisan.");
      queryClient.invalidateQueries({ queryKey: ["sviRadnici"] });
    },
    onError: (err) => toast.error(`${err}`),
  });

  return { izbrisiRadnika, isLoading };
}

export default useDeleteRadnik;
