import FormSelect from "@/components/shared/form/form-select.tsx";

export default function SekolahSelect(){
    return     <FormSelect
        name={"sekolah"}
        label={"Sekolah"}
        options={[
            {
                value: "",
                label: "SD Mangkura I"
            }
        ]}
    />
}
