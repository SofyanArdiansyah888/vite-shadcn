import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";

import useMataPelajaranStore, {
    IFilterPayload
} from "@/pages/akademik/referensi/mata-pelajaran/_data/useMataPelajaranStore.ts";
import RoleSelect from "@/components/shared/form/select/role-select.tsx";


export default function PenggunaFilter() {
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
        title={"Filter"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={handleSubmit}
    >

      <RoleSelect />

    </FilterModal>
}
