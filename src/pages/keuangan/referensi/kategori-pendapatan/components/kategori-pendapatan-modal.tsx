import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import KategoriPendapatanEntity
    from "@/pages/keuangan/referensi/kategori-pendapatan/data/kategori-pendapatan.entity.ts";


interface IKelasModal {
    selectedData: KategoriPendapatanEntity | undefined,
    setSelectedData: Dispatch<KategoriPendapatanEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function KategoriPendapatanModal({
                                                    isOpen,
                                                    handleGroupModal,
                                                    selectedData,
                                                    setSelectedData
                                                }: IKelasModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: KategoriPendapatanEntity) {
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


    return <FormModal<KategoriPendapatanEntity>
        form={form}
        title={`${selectedData ? "Edit Mata Pelajaran" : "Tambah Mata Pelajaran"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>

        <SekolahSelect/>
        <FormInput
            name={"kategori_pendapatan"}
            label={"Kategori Pendapatan"}
        />
    </FormModal>
}
