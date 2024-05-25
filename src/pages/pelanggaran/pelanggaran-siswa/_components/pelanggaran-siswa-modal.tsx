import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import PelanggaranSiswaEntity from "@/pages/pelanggaran/pelanggaran-siswa/_data/pelanggaran-siswa.entity.ts";



interface IPelanggaranSiswaModal {
    selectedData: PelanggaranSiswaEntity | undefined,
    setSelectedData: Dispatch<PelanggaranSiswaEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function PelanggaranSiswaModal({
                                                  isOpen,
                                                  handleGroupModal,
                                                  selectedData,
                                                  setSelectedData
                                              }: IPelanggaranSiswaModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: PelanggaranSiswaEntity) {
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


    return <FormModal<PelanggaranSiswaEntity>
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
