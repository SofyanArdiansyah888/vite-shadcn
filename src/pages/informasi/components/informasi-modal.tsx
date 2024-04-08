import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import FormTextarea from "@/components/shared/form/form-textarea.tsx";


interface IInformasiModal {
    selectedData: InformasiEntity | undefined,
    setSelectedData: Dispatch<InformasiEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function InformasiModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IInformasiModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: InformasiEntity) {
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


    return <FormModal<InformasiEntity>
        form={form}
        title={`${selectedData ? "Edit Informasi" : "Tambah Informasi"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>

        <SekolahSelect/>
        <FormInput
            name={"judul"}
            label={"Judul"}
        />

        <FormTextarea
            name={"konten"}
            label={"Konten"}
        />

    </FormModal>
}
