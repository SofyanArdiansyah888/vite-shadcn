import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import TahunAjaranSelect from "@/components/shared/form/select/tahun-ajaran-select.tsx";
import KategoriPembayaranEntity from "@/pages/keuangan/kategori-pembayaran/data/kategori-pembayaran.entity.ts";


interface IKelasModal {
    selectedData: KategoriPembayaranEntity | undefined,
    setSelectedData: Dispatch<KategoriPembayaranEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function KategoriPembayaranModal({
                                                    isOpen,
                                                    handleGroupModal,
                                                    selectedData,
                                                    setSelectedData
                                                }: IKelasModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: KategoriPembayaranEntity) {
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


    return <FormModal<KategoriPembayaranEntity>
        form={form}
        title={`${selectedData ? "Edit Mata Pelajaran" : "Tambah Mata Pelajaran"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>

        <SekolahSelect/>
        <TahunAjaranSelect/>


        <FormInput
            name={"mata_pelajaran"}
            label={"Nama Mata Pelajaran"}
        />
    </FormModal>
}
