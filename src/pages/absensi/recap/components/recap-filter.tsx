import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";

import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import {IFilterPayload} from "@/pages/akademik/jadwal-pengajar/data/useJadwalPengajarStore.ts";
import useAbsensiStore from "@/pages/absensi/absensi/data/useAbsensiStore.tsx";
import FormDate from "@/components/shared/form/form-date.tsx";
import KelasSelect from "@/components/shared/form/select/kelas-select.tsx";


export default function RecapFilter({selectedTab}: { selectedTab: "siswa" | "guru" }) {
    const {changeFilterPayload, filterPayload} = useAbsensiStore();
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
        title={"Filter Absensi"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={handleSubmit}
    >
        <SekolahSelect/>
        <FormDate name={"dari"} label={"Dari"}/>
        <FormDate name={"sampai"} label={"Sampaiz"}/>
        {
            selectedTab === "siswa" && <KelasSelect/>
        }
    </FilterModal>
}

