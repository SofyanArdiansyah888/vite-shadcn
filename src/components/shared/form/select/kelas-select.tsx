import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";

export default function KelasSelect({name = "kelas", label = "Kelas"}: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        options={[
            {
                value: "IPA-XI",
                label: "IPA-XI"
            }
        ]}
    />
}
