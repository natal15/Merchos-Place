import { useQuery } from "react-query";
import { dogs } from "../services";

export const useDog = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["dog"],
    queryFn: dogs.oneDog,
  });

  return { data, isLoading };
};