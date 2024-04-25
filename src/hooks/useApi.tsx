import {getDetail, getList} from "@/lib/api.ts";
import {useQuery} from "@tanstack/react-query";


interface IGet {
    name: string;
    endpoint: string;
    params: object;
}


export function useGetList<T>({
                                  name,
                                  endpoint,
                                  params
                              }: IGet) {

    return useQuery<T>({
        queryKey: [name, params],
        queryFn: async ({queryKey}) => await getList(endpoint, queryKey[1]),
    });
}

interface IGetDetail extends Omit<IGet, "params"> {
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

// interface IPOST {
//     name: string;
//     endpoint: string;
// }


// export function usePost({
//                             name,
//                             endpoint,
//                         }: IPOST) {
//     // const queryClient = new QueryClient()
//     return useMutation({
//
//         onSuccess: () => {
//             // queryClient.invalidateQueries({
//             //     queryKey: [name]
//             // })
//         },
//         onError: () => {
//
//         },
//         mutationFn: (data) => {
//             return post(endpoint, data)
//         },
//     })
// }
