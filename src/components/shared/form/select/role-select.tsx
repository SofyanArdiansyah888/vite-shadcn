import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";

export default function RoleSelect({name = "role", label = "Role", rules, disabled,mode}: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        mode={mode}
        options={[
            {
                value: "super admin",
                label: "Super Admin"
            },
            {
                value: "admin",
                label: "Admin"
            },
            {
                value: "guru",
                label: "Guru"
            },
            {
                value: "staff",
                label: "Staff"
            },
            {
                value: "siswa",
                label: "Siswa"
            },
            {
                value: "orang tua",
                label: "Orang Tua"
            },
        ]}
        rules={rules}
        disabled={disabled}
    />
}
