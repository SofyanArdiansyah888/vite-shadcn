import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";

import {IFilterPayload} from "@/pages/akademik/referensi/mata-pelajaran/_data/useMataPelajaranStore.ts";
import FormDate from "@/components/shared/form/form-date.tsx";
import KategoriPemasukanSelect from "@/components/shared/form/select/kategori-pemasukan-select.tsx";
import usePemasukanStore from "@/pages/keuangan/pemasukan/_data/usePemasukanStore.ts";


export default function PemasukanFilter() {
    const [form] = Form.useForm();
    const {changeFilterPayload, filterPayload} = usePemasukanStore();

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
        <KategoriPemasukanSelect/>
        <FormDate type={"date"} name={"dari"} label={"dari"}/>
        <FormDate type={"date"} name={"sampai"} label={"sampai"}/>
    </FilterModal>
}
