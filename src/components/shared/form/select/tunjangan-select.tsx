import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";


export default function TunjanganSelect({name = "tunjangan", label = "Tunjangan",rules,mode}: ISelect) {
    return <FormSelect
        mode={mode}
        name={name}
        label={label}
        options={[
            {
                value: "makan",
                label: "Makan"
            },

        ]}
        rules={rules}
    />
}
