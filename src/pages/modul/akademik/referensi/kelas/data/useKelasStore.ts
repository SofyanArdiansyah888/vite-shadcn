import {create} from 'zustand'
import filterReducer, {IFilterReducer} from "@/lib/filter-reducer.ts";
import {IFormSelectValue} from "@/components/shared/form/form-select.tsx";

export interface IFilterPayload {
    sekolah?: Pick<IFormSelectValue, "value" | "label">;
    tahun_ajaran?: Pick<IFormSelectValue, "value" | "label">;
}

interface IKelasStore extends IFilterReducer<IFilterPayload> {

}

const useKelasStore = create<IKelasStore>((set) => ({
    ...filterReducer(set)
}))


export default useKelasStore
