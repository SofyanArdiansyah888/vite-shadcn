import {useEffect, useState} from "react";
import {Form} from "antd";
import FormDate from "@/components/shared/form/form-date.tsx";
import {IFilterPayload} from "@/pages/keuangan/pengeluaran/_data/usePengeluaranStore.ts";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import useRekapitulasiStore from "@/pages/keuangan/rekapitulasi/_data/useRekapitulasiStore.ts";


export default function RekapitulasiFilter() {
    const [form] = Form.useForm();
    const {changeFilterPayload, filterPayload} = useRekapitulasiStore();

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
        <FormDate type={"date"} name={"dari"} label={"dari"}/>
        <FormDate type={"date"} name={"sampai"} label={"sampai"}/>
    </FilterModal>
}
