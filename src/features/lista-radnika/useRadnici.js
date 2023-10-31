import { useQuery } from "@tanstack/react-query";
import { sviRadnici } from "../../services/apiRadnici";

function useRadnici() {
  const { data, isLoading } = useQuery({
    queryKey: ["sviRadnici"],
    queryFn: sviRadnici,
  });
  return { data, isLoading };
}

export default useRadnici;
