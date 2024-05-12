import {useEffect, useState} from "react";
import FilterModal from "@/components/shared/modal/filter-modal.tsx";
import {Form} from "antd";
import FormDate from "@/components/shared/form/form-date.tsx";
import KategoriPemasukanSelect from "@/components/shared/form/select/kategori-pemasukan-select.tsx";
import usePengeluaranStore, {IFilterPayload} from "@/pages/keuangan/pengeluaran/data/usePengeluaranStore.ts";


export default function PengeluaranFilter() {
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

    return <FilterModal<IFilterPayload>
        form={form}
        title={"Filter"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={handleSubmit}
    >
        <KategoriPemasukanSelect/>
        <FormDate type={"date"} name={"dari"} label={"dari"}/>
        <FormDate type={"date"} name={"sampai"} label={"sampai"}/>
    </FilterModal>
}
