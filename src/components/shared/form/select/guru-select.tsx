import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";


export default function GuruSelect({name = "guru", label = "Guru"}: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        options={[
            {
                value: "Jamal",
                label: "Jamal Sauri"
            }
        ]}
    />
}
