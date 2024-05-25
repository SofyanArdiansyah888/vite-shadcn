import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";
import {IFilterPayload} from "@/pages/akademik/referensi/kelas/_data/useKelasStore.ts";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import TahunAjaranSelect from "@/components/shared/form/select/tahun-ajaran-select.tsx";
import usePoinPelanggaranStore from "@/pages/pelanggaran/point-pelanggaran/_data/usePoinPelanggaranStore.ts";
import KelasSelect from "@/components/shared/form/select/kelas-select.tsx";


export default function PoinPelanggaranFilter() {
    const {changeFilterPayload, filterPayload} = usePoinPelanggaranStore();
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
        title={"Filter"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={handleSubmit}
    >

        <SekolahSelect/>
        <TahunAjaranSelect/>
        <KelasSelect />

    </FilterModal>
}
