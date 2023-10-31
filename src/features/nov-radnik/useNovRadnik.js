import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { novRadnik } from "../../services/apiRadnici";

function useNovRadnik() {
  const queryClient = useQueryClient();
  const { mutate: dodajRadnika, isLoading } = useMutation({
    mutationFn: (radnik) => novRadnik(radnik),
    onSuccess: () => {
      toast.success("Radnik uspesno dodat.");
      queryClient.invalidateQueries({ queryKey: ["sviRadnici"] });
    },
    onError: (err) => toast.error(`${err}`),
  });

  return { dodajRadnika, isLoading };
}

export default useNovRadnik;
