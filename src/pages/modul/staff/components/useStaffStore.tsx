import {create} from 'zustand'
import filterReducer, {IFilterReducer} from "@/lib/filter-reducer.ts";


interface IStaffState extends IFilterReducer {

}

const useStaffStore = create<IStaffState>((set) => ({
    ...filterReducer(set)
}))


export default useStaffStore
