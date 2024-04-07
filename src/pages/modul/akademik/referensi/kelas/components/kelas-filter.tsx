import FormSelect, {IFormSelectValue} from "@/components/shared/form/form-select.tsx";
import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";
import useKelasStore, {IFilterPayload} from "@/pages/modul/akademik/referensi/kelas/data/useKelasStore.ts";



export default function KelasFilter() {
    const {changeFilterPayload, filterPayload} = useKelasStore();
    const [form] = Form.useForm();
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
            nama_sekolah: filterPayload.nama_sekolah,
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
            name={"nama_sekolah"}
            label={"Sekolah"}
            defaultValue={filterPayload.nama_sekolah}
            onChange={(value) => handleChange("nama_sekolah", value)}
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
