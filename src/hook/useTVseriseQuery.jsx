import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTVserise=()=>{
  return api.get(`/tv/popular`)
}

export const useTVseriseQuery=()=>{
  return useQuery({
    queryKey:['movie-tv'],
    queryFn:fetchTVserise
  })
}