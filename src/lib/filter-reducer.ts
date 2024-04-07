import {IFormSelectValue} from "@/components/shared/form/form-select.tsx";

export interface IFilterReducer<T> {
    filterPayload: {
        [key: string] :  Pick<IFormSelectValue, "value" | "label">
    }
    changeFilterPayload: (payload: T) => void,
    resetFilterPayload: () => void,
    deleteFilterPayload: (name: string) => void,
}

export default function filterReducer(set: any) {
    return {
        filterPayload: {},
        changeFilterPayload: (payload: any) => {
            set(() => ({
                filterPayload: {...payload},
            }))
        },
        resetFilterPayload: () => {
            set(() => ({
                    filterPayload: {}
                }
            ))
        },
        deleteFilterPayload: (name: string) => {
            set((state: any) => ({
                    filterPayload: {
                        ...state.filterPayload,
                        [name]: undefined
                    }
                }
            ))
        }
    }
}
