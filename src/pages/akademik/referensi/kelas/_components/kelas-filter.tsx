import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";
import useKelasStore, {IFilterPayload} from "@/pages/akademik/referensi/kelas/_data/useKelasStore.ts";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import TahunAjaranSelect from "@/components/shared/form/select/tahun-ajaran-select.tsx";


export default function KelasFilter() {
    const {changeFilterPayload, filterPayload} = useKelasStore();
    const [form] = Form.useForm();
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
        title={"Filter Staff"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={handleSubmit}
    >

        <SekolahSelect/>
        <TahunAjaranSelect/>

    </FilterModal>
}
