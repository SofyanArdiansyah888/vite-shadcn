import FormSelect from "@/components/shared/form/form-select.tsx";

export default function WaliKelasSelect(){
    return     <FormSelect
        name={"wali_kelas"}
        label={"Wali Kelas"}
        options={[
            {
                value: "",
                label: "Jamal Farizi"
            },
            {
                value: "",
                label: "Ahmad Firdaus"
            }
        ]}
    />
}
