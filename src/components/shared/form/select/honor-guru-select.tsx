import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";


export default function HonorGuruSelect({name = "honor", label = "Honor Guru",rules,mode}: ISelect) {
    return <FormSelect
        mode={mode}
        name={name}
        label={label}
        options={[
            {
                value: "100000",
                label: "Eselon I"
            },

        ]}
        rules={rules}
    />
}
