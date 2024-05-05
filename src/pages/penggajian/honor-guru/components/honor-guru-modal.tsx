import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import HonorGuruEntity from "@/pages/penggajian/honor-guru/data/honor-guru.entity.ts";


interface IKelasModal {
    selectedData: HonorGuruEntity | undefined,
    setSelectedData: Dispatch<HonorGuruEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function HonorGuruModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IKelasModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: HonorGuruEntity) {
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


    return <FormModal<HonorGuruEntity>
        form={form}
        title={`${selectedData ? "Edit Honor Guru" : "Tambah Honor Guru"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>

        <SekolahSelect/>
        <FormInput
            name={"kategori"}
            label={"kategori"}
        />
        <FormInput
            name={"honor"}
            label={"honor per jam"}
            type={"number"}
        />
    </FormModal>
}
