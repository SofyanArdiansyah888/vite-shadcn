import FormSelect, {IFormSelectValue} from "@/components/shared/form/form-select.tsx";
import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";
import useStaffStore from "@/pages/modul/staff/data/useStaffStore.tsx";

export interface IFilterPayload {
    jenis_kelamin?: Pick<IFormSelectValue, "value" | "label">;
    jabatan?: Pick<IFormSelectValue, "value" | "label">;
    status_kepegawaian?: Pick<IFormSelectValue, "value" | "label">;
}

export default function StaffFilter() {
    const {changeFilterPayload, filterPayload} = useStaffStore();
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
            jenis_kelamin: filterPayload.jenis_kelamin,
            jabatan: filterPayload.jabatan,
            status_kepegawaian: filterPayload.status_kepegawaian,
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
            name={"jenis_kelamin"}
            label={"Jenis Kelamin"}
            defaultValue={filterPayload.jenis_kelamin}
            onChange={(value) => handleChange("jenis_kelamin", value)}
            options={[
                {value: 'laki laki', label: 'Laki Laki'},
                {value: 'perempuan', label: 'Perempuan'},
            ]}
        />

        <FormSelect
            name={"jabatan"}
            label={"Jabatan"}
            defaultValue={filterPayload.jabatan}
            onChange={(value) => handleChange("jabatan", value)}
            options={[
                {value: 'guru', label: 'Guru'},
                {value: 'kepala sekolah', label: 'Kepala Sekolah'},
                {value: 'staff', label: 'Staff'},
            ]}
        />

        <FormSelect
            name={"status_kepegawaian"}
            label={"Status Kepegawaian"}
            defaultValue={filterPayload.status_kepegawaian}
            onChange={(value) => handleChange("status_kepegawaian", value)}
            options={[{
                value: "Pns",
                label: "Pns"
            }]}
        />

    </FilterModal>
}
