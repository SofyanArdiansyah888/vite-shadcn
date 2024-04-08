import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";

export default function WaliKelasSelect({name = "wali_kelas", label = "Wali Kelas"}: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        options={[
            {
                value: "",
                label: "Jamal Farizi"
            },
            {
                value: "",
                label: "Ahmad Firdaus"
            }
        ]}
    />
}
