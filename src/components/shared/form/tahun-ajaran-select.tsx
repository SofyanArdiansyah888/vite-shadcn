import FormSelect from "@/components/shared/form/form-select.tsx";

export default function TahunAjaranSelect(){
    return     <FormSelect
        name={"tahun_ajaran"}
        label={"Tahun ajaran"}
        options={[
            {
                value: "",
                label: "2022/2023"
            },
            {
                value: "",
                label: "2023/2024"
            }
        ]}
    />
}
