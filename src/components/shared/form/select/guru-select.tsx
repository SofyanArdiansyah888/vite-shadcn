import FormSelect from "@/components/shared/form/form-select.tsx";

export default function GuruSelect() {
    return <FormSelect
        name={"guru"}
        label={"Guru"}
        options={[
            {
                value: "Jamal",
                label: "Jamal Sauri"
            }
        ]}
    />
}
