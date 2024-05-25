import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import CBTEntity from "@/pages/cbt/_data/cbt.entity.ts";
import TahunAjaranSelect from "@/components/shared/form/select/tahun-ajaran-select.tsx";
import FormDatetime from "@/components/shared/form/form-datetime.tsx";
import FormUpload from "@/components/shared/form/form-upload.tsx";
import KelasSelect from "@/components/shared/form/select/kelas-select.tsx";
import GuruSelect from "@/components/shared/form/select/guru-select.tsx";


interface ICbtModal {
    selectedData: CBTEntity | undefined,
    setSelectedData: Dispatch<CBTEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function CbtModal({isOpen, handleGroupModal, selectedData, setSelectedData}: ICbtModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: CBTEntity) {
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


    return <FormModal<CBTEntity>
        form={form}
        title={`${selectedData ? "Edit Ujian" : "Tambah Ujian"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}
        sectionClass={"grid grid-cols-2 gap-2"}
        modalClass={"!w-[600px]"}
    >

        <SekolahSelect/>
        <TahunAjaranSelect/>
        <KelasSelect/>
        <FormInput
            name={"nama_ujian"}
            label={"Ujian"}
        />

        <FormDatetime
            name={"waktu_ujian"}
            label={"Waktu"}
        />
        <GuruSelect
            mode={"tags"}
            name={"pemeriksa"}
            label={"Pemeriksa"}
        />

        <FormInput
            name={"durasi"}
            label={"Durasi"}
            type={"number"}
        />
        <FormInput
            name={"soal_pilihan_ganda"}
            label={"Pilihan Ganda"}
            type={"number"}
        />
        <FormInput
            name={"soal_essay"}
            label={"Essay"}
            type={"number"}
        />
        <FormUpload
            name={"soal"}
            label={"Upload Soal"}
        />


    </FormModal>
}
