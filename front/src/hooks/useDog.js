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
        queryClient.invalidateQueries({ queryKey: ["oneDog"] });
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
        queryClient.invalidateQueries({ queryKey: ["oneDog"] });
      } 
    }
  })
  
  return { eraseDog };
}

export const useMed = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["oneMed"],
    queryFn: dogs.oneMed,
  });
  return { data, isLoading };
};

export const useFood = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["oneFood"],
    queryFn: dogs.oneFood,
  });
  return { data, isLoading };
};

export const useNewMed = () => {
  const queryClient = useQueryClient();

  const { mutate: newMed } = useMutation({
    mutationFn: (params) => dogs.createMed(params),
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["oneDog"] });
      } 
    }
  })
  return { newMed };
}

export const useNewFood = () => {
  const queryClient = useQueryClient();

  const { mutate: newFood } = useMutation({
    mutationFn: (params) => dogs.createF(params),
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["oneDog"] });
      } 
    }
  })
  return { newFood };
}


