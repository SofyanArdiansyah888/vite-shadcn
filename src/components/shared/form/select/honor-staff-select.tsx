import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";


export default function HonorStaffSelect({name = "honor", label = "Honor Staff",rules,mode}: ISelect) {
    return <FormSelect
        mode={mode}
        name={name}
        label={label}
        options={[
            {
                value: "10000",
                label: "Junior I"
            },

        ]}
        rules={rules}
    />
}
