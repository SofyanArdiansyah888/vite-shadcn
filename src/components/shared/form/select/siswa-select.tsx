import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";


export default function SiswaSelect({name = "siswa", label = "Siswa",rules,mode}: ISelect) {
    return <FormSelect
        mode={mode}
        name={name}
        label={label}
        options={[
            {
                value: "Jamal",
                label: "Jamal Sauri"
            },
            {
                value: "Rina",
                label: "Rina Sauri"
            },
            {
                value: "Rani",
                label: "Rani Sauri"
            },
        ]}
        rules={rules}
    />
}
