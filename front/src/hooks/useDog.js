import { useMutation, useQueryClient, useQuery } from "react-query";
import { dogs } from "../services";

export const useDog = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["oneDog"],
    queryFn: dogs.oneDog,
  });
  return { data, isLoading };
};

export const useData = (params) => {
  
  const { data, isLoading } = useQuery({
    queryKey: ["dogData"],
    queryFn: () => dogs.dogData(params),
  });
  
  return { data, isLoading };
};

export const useCreate = () => {
  const queryClient = useQueryClient();

  const { mutate: newDog } = useMutation({
    mutationFn: dogs.createDog,
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["dogCreate"] });
      } 
    }
  })
  return { newDog };
}

export const useDelete = () => {
  const queryClient = useQueryClient();
  
  const { mutate: eraseDog } = useMutation({
    mutationFn: (params) => dogs.deleteDog(params),
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["dogDelete"] });
      } 
    }
  })
  
  return { eraseDog };
}



