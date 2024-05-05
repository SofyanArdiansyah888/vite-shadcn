import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";

import useMataPelajaranStore, {
    IFilterPayload
} from "@/pages/akademik/referensi/mata-pelajaran/data/useMataPelajaranStore.ts";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";


export default function HonorGuruFilter() {
    const [form] = Form.useForm();
    const {changeFilterPayload, filterPayload} = useMataPelajaranStore();

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
        {/*<FormSelect*/}
        {/*    name={"tahun_ajaran"}*/}
        {/*    label={"Tahun Ajaran"}*/}
        {/*    defaultValue={filterPayload.tahun_ajaran}*/}
        {/*    onChange={(value) => handleChange("jabatan", value)}*/}
        {/*    options={[*/}
        {/*        {value: 'guru', label: 'Guru'},*/}
        {/*        {value: 'kepala sekolah', label: 'Kepala Sekolah'},*/}
        {/*        {value: 'staff', label: 'Staff'},*/}
        {/*    ]}*/}
        {/*/>*/}

    </FilterModal>
}
