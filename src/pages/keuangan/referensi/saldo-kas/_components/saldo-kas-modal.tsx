import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import SaldoKasEntity from "@/pages/keuangan/referensi/saldo-kas/_data/saldo-kas.entity.ts";
import TahunSelect from "@/components/shared/form/select/tahun-select.tsx";


interface IKelasModal {
    selectedData: SaldoKasEntity | undefined,
    setSelectedData: Dispatch<SaldoKasEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function SaldoKasModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IKelasModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: SaldoKasEntity) {
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


    return <FormModal<SaldoKasEntity>
        form={form}
        title={`${selectedData ? "Edit Saldo Kas" : "Tambah Saldo Kas"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>

        <SekolahSelect/>
        <TahunSelect/>
        <FormInput
            type={"number"}
            name={"saldo"}
            label={"Jumlah Saldo"}
        />
    </FormModal>
}
