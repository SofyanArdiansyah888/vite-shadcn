import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";

export default function SekolahSelect({name = "sekolah", label = "Sekolah"}: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        options={[
            {
                value: "",
                label: "SD Mangkura I"
            }
        ]}
    />
}
