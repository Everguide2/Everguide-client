import {useQuery} from "@tanstack/react-query";
import {getTest} from "@apis/test-controller.js";

export const useGetTest = () => {
  return useQuery({
    queryKey: ["test"],
    queryFn: () => getTest(),
    retry: 1,
    staleTime: 5000,
  });
};