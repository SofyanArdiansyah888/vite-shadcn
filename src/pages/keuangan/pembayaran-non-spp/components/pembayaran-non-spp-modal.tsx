import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import TahunAjaranSelect from "@/components/shared/form/select/tahun-ajaran-select.tsx";
import PembayaranNonSppEntity from "@/pages/keuangan/pembayaran-non-spp/data/pembayaran-non-spp.entity.ts";
import KelasSelect from "@/components/shared/form/select/kelas-select.tsx";


interface IKelasModal {
    selectedData: PembayaranNonSppEntity | undefined,
    setSelectedData: Dispatch<PembayaranNonSppEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function PembayaranNonSppModal({
                                                    isOpen,
                                                    handleGroupModal,
                                                    selectedData,
                                                    setSelectedData
                                                }: IKelasModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: PembayaranNonSppEntity) {
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


    return <FormModal<PembayaranNonSppEntity>
        form={form}
        title={`${selectedData ? "Edit Pembayaran" : "Tambah Pembayaran"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>

        <TahunAjaranSelect/>
        <FormInput
            name={"nama_pembayaran"}
            label={"Nama Pembayaran"}
        />
        <FormInput
            name={"harga"}
            label={"harga"}
        />
        <KelasSelect
            mode={"multiple"}
        />
    </FormModal>
}
