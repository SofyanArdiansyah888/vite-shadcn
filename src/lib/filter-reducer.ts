export interface IFilterReducer<T> {
    filterPayload: T
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
