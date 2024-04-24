import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";
import {IFilterPayload} from "@/pages/akademik/referensi/mata-pelajaran/data/useMataPelajaranStore.ts";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import JenisIzinSelect from "@/components/shared/form/select/jenis-izin-select.tsx";
import useIzinStaffStore from "@/pages/absensi/izin/izin-staff/data/useIzinStaffStore.ts";


export default function IzinStaffFilter() {
    const [form] = Form.useForm();
    const {changeFilterPayload, filterPayload} = useIzinStaffStore();

    const [isOpen, setIsOpen] = useState(false)

    // function handleChange(name: string, value: Pick<IFormSelectValue, "value" | "label">) {
    //     form.setFieldValue(name, value)
    // }

    function handleSubmit(value: IFilterPayload) {
        changeFilterPayload({...value})
        setIsOpen(false)
    }

    useEffect(() => {
        form.setFieldsValue({
            sekolah: filterPayload.sekolah,
            jenis_izin: filterPayload.jenis_izin,
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
        <JenisIzinSelect/>
    </FilterModal>
}
