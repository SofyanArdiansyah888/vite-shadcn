import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";

export default function HariSelect({name = "hari", label = "Hari",rules}: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        options={[
            {
                value: "senin",
                label: "Senin"
            },
            {
                value: "selasa",
                label: "Selasa"
            },
            {
                value: "rabu",
                label: "Rabu"
            },
            {
                value: "kamis",
                label: "Kamis"
            },
            {
                value: "jumat",
                label: "Jumat"
            },
            {
                value: "sabtu",
                label: "Sabtu"
            },
            {
                value: "ahad",
                label: "Ahad"
            },
        ]}
        rules={rules}
    />
}
