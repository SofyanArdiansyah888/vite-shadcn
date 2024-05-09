import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import StaffEntity from "@/pages/staff/data/staff.entity.ts";
import TunjanganSelect from "@/components/shared/form/select/tunjangan-select.tsx";
import HonorStaffSelect from "@/components/shared/form/select/honor-staff-select.tsx";

interface IProfilGajiStaffModal {
    selectedData: StaffEntity | undefined,
    setSelectedData: Dispatch<StaffEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function ProfilGajiStaffModal({
                                                 isOpen,
                                                 handleGroupModal,
                                                 selectedData,
                                                 setSelectedData
                                             }: IProfilGajiStaffModal) {
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
            label={"staff"}
        />

        <HonorStaffSelect/>

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
