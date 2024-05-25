import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import JenisPelanggaranEntity from "@/pages/pelanggaran/jenis-pelanggaran/_data/jenis-pelanggaran.entity.ts";


interface IJenisPelanggaranModal {
    selectedData: JenisPelanggaranEntity | undefined,
    setSelectedData: Dispatch<JenisPelanggaranEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function JenisPelanggaranModal({
                                                  isOpen,
                                                  handleGroupModal,
                                                  selectedData,
                                                  setSelectedData
                                              }: IJenisPelanggaranModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: JenisPelanggaranEntity) {
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


    return <FormModal<JenisPelanggaranEntity>
        form={form}
        title={`${selectedData ? "Edit Jenis Pelanggaran" : "Tambah Jenis Pelanggaran"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>

        <SekolahSelect/>

        <FormInput
            name={"pelanggaran"}
            label={"Pelanggaran"}
        />

        <FormInput
            name={"poin"}
            label={"Poin"}
        />
    </FormModal>
}
