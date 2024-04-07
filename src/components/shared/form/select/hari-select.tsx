import FormSelect from "@/components/shared/form/form-select.tsx";

export default function HariSelect() {
    return <FormSelect
        name={"hari"}
        label={"Hari"}
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
    />
}
