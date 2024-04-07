import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/sekolah-select.tsx";
import KelasEntity from "@/pages/modul/akademik/referensi/kelas/data/kelas.entity.ts";

interface IKelasModal {
    selectedData:KelasEntity | undefined,
    setSelectedData: Dispatch<KelasEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function KelasModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IKelasModal) {
    const [form] = Form.useForm();

    function handleSubmit(value:KelasEntity) {
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


    return <FormModal<KelasEntity>
        form={form}
        title={ `${selectedData ? "Edit kelas" : "Tambah kelas"}`}
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
