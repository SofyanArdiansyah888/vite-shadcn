import axios, {AxiosRequestConfig} from "axios";

type IRequest<T> = {
    endpoint: string;
    method: AxiosRequestConfig["method"];
    data?: T ;
    responseType: "json" | "blob" | "text" | "arraybuffer" | "document" | "stream"
};

export function apiRequest<T>({
                               data,
                               method,
                               endpoint,
                               responseType
                           }: IRequest<T>): Promise<T> {

    const config: AxiosRequestConfig = {
        method,
        url: `${import.meta.env.VITE_BASE_URL}${endpoint}`,
        headers: {
            'Accept' : 'application/json',
            "Content-Type": "application/json",
        },
        responseType
    };

    // if (token) {
    //     config.headers!.Authorization = `Bearer ${token}`;
    // }

    if (data) {
        config.data = JSON.stringify(data);
    }

    // eslint-disable-next-line no-async-promise-executor
    return new Promise<T>(async (resolve, reject) => {
        try {
            const response = await axios(config);
            resolve(response.data);
        } catch (error) {
            reject(error);
        }
    });
}



export function getList<T>(endpoint: string, params: any) {
    const urlSearchParams = new URLSearchParams();
    if (params) {
        Object.entries(params).map((item) => {
            if (item[1] !== undefined) urlSearchParams.append(item[0], item[1] as string);
        });
    }
    return apiRequest<T>({
        // token: user?.token,
        method: "GET",
        endpoint: `${endpoint}?${urlSearchParams.toString()}`,
        responseType: 'json'
    });
}

export function getDetail<T>(endpoint: string, id: string) {
    return apiRequest<T>({
        // token: user?.token,
        method: "GET",
        endpoint: `${endpoint}/${id}`,
        responseType: 'json'
    });
}
