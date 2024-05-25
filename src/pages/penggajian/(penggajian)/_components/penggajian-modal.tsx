import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import HonorGuruEntity from "@/pages/penggajian/honor-guru/_data/honor-guru.entity.ts";
import FormDate from "@/components/shared/form/form-date.tsx";


interface IKelasModal {
    selectedData: HonorGuruEntity | undefined,
    setSelectedData: Dispatch<HonorGuruEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function PenggajianModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IKelasModal) {
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
        onSubmit={handleSubmit}
    >

        <SekolahSelect/>
        <FormDate name={"periode"}
                  label={"periode"}
                  type={"month"}

        />

    </FormModal>
}
