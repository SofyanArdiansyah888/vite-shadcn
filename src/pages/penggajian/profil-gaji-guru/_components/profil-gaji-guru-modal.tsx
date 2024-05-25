import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import StaffEntity from "@/pages/staff/_data/staff.entity.ts";
import TunjanganSelect from "@/components/shared/form/select/tunjangan-select.tsx";
import HonorGuruSelect from "@/components/shared/form/select/honor-guru-select.tsx";

interface IProfilGajiGuruModal {
    selectedData: StaffEntity | undefined,
    setSelectedData: Dispatch<StaffEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function ProfilGajiGuruModal({
                                                 isOpen,
                                                 handleGroupModal,
                                                 selectedData,
                                                 setSelectedData
                                             }: IProfilGajiGuruModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: StaffEntity) {
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


    return <FormModal<StaffEntity>
        form={form}
        title={`${selectedData ? "Edit Data Gaji" : "Tambah Data Gaji"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>


        <FormInput
            name={"staff"}
            label={"guru"}
        />

        <HonorGuruSelect />

        <FormInput
            name={"jam"}
            label={"jam"}
            type={"number"}
        />
        <FormInput
            name={"pajak"}
            label={"pajak (%)"}
            type={"number"}
        />
        <TunjanganSelect/>
    </FormModal>
}
