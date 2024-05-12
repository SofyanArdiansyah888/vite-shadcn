import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";


export default function KategoriPemasukanSelect({name = "kategori_pemasukan", label = "Kategori Pemasukaan", rules}: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        options={[
            {
                value: "dana bos",
                label: "Dana Bos"
            },
            {
                value: "sumbangan yayasan",
                label: "Sumbangan Yayasan"
            },
        ]}
        rules={rules}
    />
}
