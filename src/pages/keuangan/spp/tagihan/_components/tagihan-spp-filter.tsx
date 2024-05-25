import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";

import {IFilterPayload} from "@/pages/akademik/referensi/mata-pelajaran/_data/useMataPelajaranStore.ts";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import TahunAjaranSelect from "@/components/shared/form/select/tahun-ajaran-select.tsx";
import KelasSelect from "@/components/shared/form/select/kelas-select.tsx";
import FormDate from "@/components/shared/form/form-date.tsx";
import useTagihanSPPStore from "@/pages/keuangan/spp/tagihan/_data/useTagihanSPPStore.ts";


export default function TagihanSppFilter() {
    const [form] = Form.useForm();
    const {changeFilterPayload, filterPayload} = useTagihanSPPStore();
    const [isOpen, setIsOpen] = useState(false)

    function handleChange(name: string, value: string) {
        form.setFieldValue(name, value)
    }

    function handleSubmit(value: IFilterPayload) {
        changeFilterPayload({...value})
        setIsOpen(false)
    }

    useEffect(() => {
        form.setFieldsValue({
            sekolah: filterPayload.sekolah,
            tahun_ajaran: filterPayload.tahun_ajaran,
        })
    }, [filterPayload, form, isOpen]);

    return <FilterModal<IFilterPayload>
        form={form}
        title={"Filter"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={handleSubmit}
    >
        <SekolahSelect/>
        <TahunAjaranSelect/>
        <KelasSelect/>
        <FormDate name={"bulan"} label={"bulan"} type={"month"} onChange={(value) => handleChange("bulan", value)}/>
    </FilterModal>
}
