import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import PemasukanEntity from "@/pages/keuangan/spp/data-spp/data/data-spp.entity.ts";
import FormDate from "@/components/shared/form/form-date.tsx";
import FormTextarea from "@/components/shared/form/form-textarea.tsx";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import KategoriPemasukanSelect from "@/components/shared/form/select/kategori-pemasukan-select.tsx";


interface IKelasModal {
    selectedData: PemasukanEntity | undefined,
    setSelectedData: Dispatch<PemasukanEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function PemasukanModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IKelasModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: PemasukanEntity) {
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


    return <FormModal<PemasukanEntity>
        form={form}
        title={`${selectedData ? "Edit Data SPP" : "Tambah Data SPP"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>
        <SekolahSelect/>
        <KategoriPemasukanSelect/>
        <FormInput type={"number"} name={"nominal"} label={"Nominal"} rules={[{required: true}]}/>
        <FormTextarea name={"catatan"} label={"catatan"}/>
        <FormDate name={"tanggal"} label={"Tanggal"} rules={[{required: true}]}/>
    </FormModal>
}
