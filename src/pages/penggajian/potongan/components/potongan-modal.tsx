import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import PotonganEntity from "@/pages/penggajian/potongan/data/potongan.entity.ts";



interface IKelasModal {
    selectedData: PotonganEntity | undefined,
    setSelectedData: Dispatch<PotonganEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function PotonganModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IKelasModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: PotonganEntity) {
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


    return <FormModal<PotonganEntity>
        form={form}
        title={`${selectedData ? "Edit Potongan" : "Tambah Potongan"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>

        <SekolahSelect/>
        <FormInput
            name={"potongan"}
            label={"potongan"}
        />
        <FormInput
            name={"nominal"}
            label={"nominal"}
            type={"number"}
        />
    </FormModal>
}
