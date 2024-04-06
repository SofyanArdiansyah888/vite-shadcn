import {IFilterPayload} from "@/pages/modul/staff/components/staff-filter.tsx";

export interface IFilterReducer {
    filterPayload: IFilterPayload
    changeFilterPayload: (payload: IFilterPayload) => void,
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
