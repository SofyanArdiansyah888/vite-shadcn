import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";

export default function TahunAjaranSelect({name = "tahun_ajaran", label = "Tahun Ajaran",rules}: ISelect){
    return     <FormSelect
        name={name}
        label={label}
        options={[
            {
                value: "",
                label: "2022/2023"
            },
            {
                value: "",
                label: "2023/2024"
            }
        ]}
        rules={rules}
    />
}
