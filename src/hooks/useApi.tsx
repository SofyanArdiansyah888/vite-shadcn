import {getDetail, getList} from "@/service/api.ts";
import {useQuery} from "@tanstack/react-query";


interface IGet {
    name: string;
    endpoint: string;
    params: {}
}


export function useGetList<T>({
                               name,
                               endpoint,
                               params
                           }: IGet) {

    return useQuery<T>({
        queryKey: [name],
        queryFn: async () => await getList(endpoint, params),
    });
}

interface IGetDetail extends Omit<IGet, "params">{
    id: string
}
export function useGetDetail({
                                 name,
                                 endpoint,
                                 id
                             }: IGetDetail) {

    return useQuery({
        queryKey: [name, id],
        queryFn: async ({queryKey}) => await getDetail(endpoint, queryKey[1]),
    });
}
