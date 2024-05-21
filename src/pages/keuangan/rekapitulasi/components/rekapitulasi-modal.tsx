import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import FormDate from "@/components/shared/form/form-date.tsx";
import FormTextarea from "@/components/shared/form/form-textarea.tsx";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import KategoriPengeluaranSelect from "@/components/shared/form/select/kategori-pengeluaran-select.tsx";
import RekapitulasiKeuanganEntity from "@/pages/keuangan/pengeluaran/data/pengeluaran.entity.ts";


interface IPengeluaranModal {
    selectedData: PengeluaranEntity | undefined,
    setSelectedData: Dispatch<PengeluaranEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function RekapitulasiModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IPengeluaranModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: PengeluaranEntity) {
        console.log(value)
        handleGroupModal("modal", false)
    }

    useEffect(() => {
        if (selectedData) {
            form.setFieldsValue({...selectedData})
        }
        if (!isOpen) {
            form.resetFields()
            setSelectedData(undefined)
        }

    }, [form, selectedData, setSelectedData, isOpen])


    return <FormModal<PengeluaranEntity>
        form={form}
        title={`${selectedData ? "Edit Pengeluaran" : "Tambah Pengeluaran"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>
        <SekolahSelect/>
        <KategoriPengeluaranSelect/>
        <FormInput type={"number"} name={"nominal"} label={"Nominal"} rules={[{required: true}]}/>
        <FormTextarea name={"catatan"} label={"catatan"}/>
        <FormDate name={"tanggal"} label={"Tanggal"} rules={[{required: true}]}/>
    </FormModal>
}
