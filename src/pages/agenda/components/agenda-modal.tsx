import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";

import FormTextarea from "@/components/shared/form/form-textarea.tsx";
import AgendaEntity from "@/pages/agenda/data/agenda.entity.ts";
import FormDatetime from "@/components/shared/form/form-datetime.tsx";


interface IInformasiModal {
    selectedData: AgendaEntity | undefined,
    setSelectedData: Dispatch<AgendaEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function AgendaModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IInformasiModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: AgendaEntity) {
        console.log(value)
        handleGroupModal("modal", false)
    }

    useEffect(() => {
        if (selectedData) {
            // form.setFieldsValue({...selectedData})
        }
        if (!isOpen) {
            form.resetFields()
            setSelectedData(undefined)
        }

    }, [form, selectedData, setSelectedData, isOpen])


    return <FormModal<AgendaEntity>
        form={form}
        title={`${selectedData ? "Edit Agenda" : "Tambah Agenda"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>

        <SekolahSelect/>
        <FormInput
            name={"judul"}
            label={"Judul"}
        />

        <FormDatetime
            name={"dari"}
            label={"Dari"}
        />

        <FormDatetime
            name={"sampai"}
            label={"Sampai"}
        />

        <FormTextarea
            name={"keterangan"}
            label={"Keterangan"}
        />

    </FormModal>
}
