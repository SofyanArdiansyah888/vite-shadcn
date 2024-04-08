import {create} from 'zustand'
import filterReducer, {IFilterReducer} from "@/lib/filter-reducer.ts";
import {IFormSelectValue} from "@/components/shared/form/form-select.tsx";

export interface IFilterPayload {
    jenis_kelamin?: Pick<IFormSelectValue, "value" | "label">;
    jabatan?: Pick<IFormSelectValue, "value" | "label">;
    status_kepegawaian?: Pick<IFormSelectValue, "value" | "label">;
}
interface IStaffState extends IFilterReducer<IFilterPayload> {

}

const useStaffStore = create<IStaffState>((set) => ({
    ...filterReducer(set)
}))


export default useStaffStore
