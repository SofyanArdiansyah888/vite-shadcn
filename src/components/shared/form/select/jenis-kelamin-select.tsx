import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";


export default function JenisKelaminSelect({name = "jenis_kelamin", label = "Jenis Kelamin", rules}: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        options={[
            {
                value: "laki-laki",
                label: "Laki-laki"
            },
            {
                value: "perempuan",
                label: "Perempuan"
            },
        ]}
        rules={rules}
    />
}
