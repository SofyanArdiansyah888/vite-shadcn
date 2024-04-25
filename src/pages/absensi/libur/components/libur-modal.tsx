import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import FormDate from "@/components/shared/form/form-date.tsx";
import LiburEntity from "@/pages/absensi/libur/data/libur.entity.ts";

interface ILiburModal {
    selectedData: LiburEntity | undefined,
    setSelectedData: Dispatch<LiburEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function LiburModal({isOpen, handleGroupModal, selectedData, setSelectedData}: ILiburModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: LiburEntity) {
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


    return <FormModal<LiburEntity>
        form={form}
        title={`${selectedData ? "Edit Libur" : "Tambah Libur"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>
        <FormInput
            name={"nama_libur"}
            label={"Nama Hari Libur"}
        />
        <FormDate name={"dari"} label={"dari"}/>
        <FormDate name={"sampai"} label={"sampai"}/>
    </FormModal>
}
