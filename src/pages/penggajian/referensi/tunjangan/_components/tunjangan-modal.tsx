import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import TunjanganEntity from "@/pages/penggajian/tunjangan/_data/tunjangan.entity.ts";



interface IKelasModal {
    selectedData: TunjanganEntity | undefined,
    setSelectedData: Dispatch<TunjanganEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function TunjanganModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IKelasModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: TunjanganEntity) {
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


    return <FormModal<TunjanganEntity>
        form={form}
        title={`${selectedData ? "Edit Potongan" : "Tambah Potongan"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>

        <SekolahSelect/>
        <FormInput
            name={"tunjangan"}
            label={"tunjangan"}
        />
        <FormInput
            name={"nominal"}
            label={"nominal"}
            type={"number"}
        />
    </FormModal>
}
