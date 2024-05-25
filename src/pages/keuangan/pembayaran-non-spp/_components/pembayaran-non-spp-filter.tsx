import FormSelect, {IFormSelectValue} from "@/components/shared/form/form-select.tsx";
import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";

import useMataPelajaranStore, {
    IFilterPayload
} from "@/pages/akademik/referensi/mata-pelajaran/_data/useMataPelajaranStore.ts";


export default function PembayaranNonSppFilter() {
    const [form] = Form.useForm();
    const {changeFilterPayload, filterPayload} = useMataPelajaranStore();

    const [isOpen, setIsOpen] = useState(false)

    function handleChange(name: string, value: Pick<IFormSelectValue, "value" | "label">) {
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
        title={"Filter Staff"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={handleSubmit}
    >

        <FormSelect
            name={"sekolah"}
            label={"Sekolah"}
            defaultValue={filterPayload.sekolah}
            onChange={(value) => handleChange("sekolah", value)}
            options={[
                {value: 'laki laki', label: 'Laki Laki'},
                {value: 'perempuan', label: 'Perempuan'},
            ]}
        />

        <FormSelect
            name={"tahun_ajaran"}
            label={"Tahun Ajaran"}
            defaultValue={filterPayload.tahun_ajaran}
            onChange={(value) => handleChange("jabatan", value)}
            options={[
                {value: 'guru', label: 'Guru'},
                {value: 'kepala sekolah', label: 'Kepala Sekolah'},
                {value: 'staff', label: 'Staff'},
            ]}
        />

    </FilterModal>
}
