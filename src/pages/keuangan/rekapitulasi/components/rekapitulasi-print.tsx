import {useEffect, useState} from "react";
import {Form} from "antd";
import FormDate from "@/components/shared/form/form-date.tsx";
import usePengeluaranStore, {IFilterPayload} from "@/pages/keuangan/pengeluaran/data/usePengeluaranStore.ts";
import PrintModal from "@/components/shared/modal/print-modal.tsx";


export default function RekapitulasiPrint() {
    const [form] = Form.useForm();
    const {changeFilterPayload, filterPayload} = usePengeluaranStore();

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

    return <PrintModal<IFilterPayload>
        form={form}
        title={"Print"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={handleSubmit}
    >
        <FormDate type={"date"} name={"dari"} label={"dari"}/>
        <FormDate type={"date"} name={"sampai"} label={"sampai"}/>
    </PrintModal>
}
