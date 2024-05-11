import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";

export default function TahunSelect({name = "tahun", label = "Tahun", rules}: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        options={[
            {
                value: "2023",
                label: "2023"
            },
            {
                value: "2024",
                label: "2024"
            },
            {
                value: "2025",
                label: "2025"
            }

        ]}
        rules={rules}
    />
}
