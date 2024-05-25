import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import TahunAjaranEntity from "@/pages/akademik/referensi/tahun-ajaran/_data/tahun-ajaran.entity.ts";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";

interface ITahunAjaranModal {
    selectedData: TahunAjaranEntity | undefined,
    setSelectedData: Dispatch<TahunAjaranEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function TahunAjaranModal({isOpen, handleGroupModal, selectedData, setSelectedData}: ITahunAjaranModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: TahunAjaranEntity) {
        console.log(value)
        handleGroupModal("modal", false)
    }

    useEffect(() => {
        if (selectedData) {
            form.setFieldsValue({...selectedData})
        }
        if (!isOpen) {
            form.resetFields()
        }
        return () => {
            setSelectedData(undefined)
        }
    }, [form, selectedData, setSelectedData, isOpen])

    return <FormModal<TahunAjaranEntity>
        form={form}
        title={"Form tahun ajaran"}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>

        <SekolahSelect/>

        <FormInput
            name={"tahun_ajaran"}
            label={"Tahun Ajaran"}
        />
    </FormModal>
}
