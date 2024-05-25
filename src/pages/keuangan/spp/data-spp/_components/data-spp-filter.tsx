import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";

import {IFilterPayload} from "@/pages/akademik/referensi/mata-pelajaran/_data/useMataPelajaranStore.ts";
import TahunAjaranSelect from "@/components/shared/form/select/tahun-ajaran-select.tsx";
import KelasSelect from "@/components/shared/form/select/kelas-select.tsx";
import FormDate from "@/components/shared/form/form-date.tsx";
import useDataSPPStore from "@/pages/keuangan/spp/data-spp/_data/useDataSPPStore.ts";


export default function DataSppFilter() {
    const [form] = Form.useForm();
    const {changeFilterPayload, filterPayload} = useDataSPPStore();

    const [isOpen, setIsOpen] = useState(false)

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
        <TahunAjaranSelect/>
        <KelasSelect/>
        <FormDate type={"month"} name={"bulan"} label={"bulan"}/>

    </FilterModal>
}
