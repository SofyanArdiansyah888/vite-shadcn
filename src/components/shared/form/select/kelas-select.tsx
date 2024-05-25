import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";

export default function KelasSelect({name = "kelas", label = "Kelas", rules, disabled,mode}: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        mode={mode}
        options={[
            {
                value: "IPA-X",
                label: "IPA-X"
            },
            {
                value: "IPA-XI",
                label: "IPA-XI"
            },
            {
                value: "IPA-XII",
                label: "IPA-XII"
            },
        ]}
        rules={rules}
        disabled={disabled}
    />
}
