import {getDetail, getList} from "@/lib/api.ts";
import {useQuery} from "@tanstack/react-query";


interface IGet {
    name: string;
    endpoint: string;
    params: {};
}


export function useGetList<T>({
                               name,
                               endpoint,
                               params
                           }: IGet) {

    return useQuery<T>({
        queryKey: [name,params],
        queryFn: async ({queryKey}) => await getList(endpoint, queryKey[1]),
    });
}

interface IGetDetail extends Omit<IGet, "params">{
    id: string
}
export function useGetDetail<T>({
                                 name,
                                 endpoint,
                                 id
                             }: IGetDetail) {

    return useQuery<T>({
        queryKey: [name, id],
        queryFn: async ({queryKey}) => await getDetail<T>(endpoint, queryKey[1] as string),
    });
}
