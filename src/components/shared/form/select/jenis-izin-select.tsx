import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";


export default function JenisIzinSelect({name = "jenis_izin", label = "Jenis Izin", rules}: ISelect) {
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
