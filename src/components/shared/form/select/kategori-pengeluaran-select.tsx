import FormSelect from "@/components/shared/form/form-select.tsx";
import {ISelect} from "@/components/shared/form/select/ISelect.ts";


export default function KategoriPengeluaranSelect({
                                                      name = "kategori_pengeluaran",
                                                      label = "Kategori Pengeluaran",
                                                      rules
                                                  }: ISelect) {
    return <FormSelect
        name={name}
        label={label}
        options={[
            {
                value: "pembayaran listrik",
                label: "Pembayaran Listrik"
            }
        ]}
        rules={rules}
    />
}
