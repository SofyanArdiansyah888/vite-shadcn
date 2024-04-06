import {useState} from "react";

export type IUseParams = {
    [key: string]: string|number|boolean|null|undefined;
};
export default function useParams(initialState:IUseParams) {
    const [params, setParams] = useState(initialState)

    function handleParamsChange(key: string, value: any) {
        setParams({...params, [key]: value})
    }

    return {
        handleParamsChange,
        params,
        setParams
    }
}
