import {useQuery} from "@tanstack/react-query";
import {getNoAuth} from "@apis/member-controller.js";

export const useGetNoAuth = () => {
  return useQuery({
    queryKey: ["noAuth"],
    queryFn: () => getNoAuth(),
    retry: 1,
    staleTime: 5000,
  })
}