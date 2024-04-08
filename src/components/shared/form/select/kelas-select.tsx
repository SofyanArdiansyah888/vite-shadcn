import FormSelect from "@/components/shared/form/form-select.tsx";

export default function KelasSelect() {
    return <FormSelect
        name={"kelas"}
        label={"Kelas"}
        options={[
            {
                value: "IPA-XI",
                label: "IPA-XI"
            }
        ]}
    />
}
