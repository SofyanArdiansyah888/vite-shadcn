import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";


export default function GolonganDarahSelect({name = "golongan_darah", label = "Golongan Darah",rules}: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        options={[
            {
                value: "a",
                label: "A"
            },
            {
                value: "b",
                label: "B"
            },
            {
                value: "ab",
                label: "AB"
            },
            {
                value: "o",
                label: "O"
            },
        ]}
        rules={rules}
    />
}
