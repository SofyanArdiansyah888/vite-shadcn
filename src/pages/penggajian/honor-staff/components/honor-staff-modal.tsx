import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import HonorStaffEntity from "@/pages/penggajian/honor-staff/data/honor-staff.entity.ts";


interface IKelasModal {
    selectedData: HonorStaffEntity | undefined,
    setSelectedData: Dispatch<HonorStaffEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function HonorStaffModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IKelasModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: HonorStaffEntity) {
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


    return <FormModal<HonorStaffEntity>
        form={form}
        title={`${selectedData ? "Edit Honor Staff" : "Tambah Honor Staff"}`}
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
            label={"honor per bulan"}
            type={"number"}
        />
    </FormModal>
}
