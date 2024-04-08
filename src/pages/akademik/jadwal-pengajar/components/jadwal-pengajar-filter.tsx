import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";

import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import TahunAjaranSelect from "@/components/shared/form/select/tahun-ajaran-select.tsx";
import GuruSelect from "@/components/shared/form/select/guru-select.tsx";
import HariSelect from "@/components/shared/form/select/hari-select.tsx";
import useJadwalPengajarStore, {
    IFilterPayload
} from "@/pages/akademik/jadwal-pengajar/data/useJadwalPengajarStore.ts";


export default function JadwalPengajarFilter() {
    const {changeFilterPayload, filterPayload} = useJadwalPengajarStore();
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
        title={"Filter Jadwal Pengajar"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={handleSubmit}
    >
        <SekolahSelect/>
        <TahunAjaranSelect/>
        <GuruSelect/>
        <HariSelect/>

    </FilterModal>
}

