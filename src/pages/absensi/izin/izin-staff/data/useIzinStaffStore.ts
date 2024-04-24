import {create} from 'zustand'
import filterReducer, {IFilterReducer} from "@/lib/filter-reducer.ts";
import {IFormSelectValue} from "@/components/shared/form/form-select.tsx";

export interface IFilterPayload {
    sekolah?: Pick<IFormSelectValue, "value" | "label">;
    jenis_izin?: Pick<IFormSelectValue, "value" | "label">;
}
const useIzinStaffStore = create<IFilterReducer<IFilterPayload>>((set) => ({
    ...filterReducer(set)
}))
export default useIzinStaffStore
