import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";

import FormDate from "@/components/shared/form/form-date.tsx";
import FormTextarea from "@/components/shared/form/form-textarea.tsx";
import JenisIzinSelect from "@/components/shared/form/select/jenis-izin-select.tsx";
import IzinSiswaEntity from "@/pages/absensi/izin/izin-siswa/_data/izin-siswa.entity.ts";
import SiswaSelect from "@/components/shared/form/select/siswa-select.tsx";

interface IIzinStaffModal {
    selectedData: IzinSiswaEntity | undefined,
    setSelectedData: Dispatch<IzinSiswaEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function IzinSiswaModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IIzinStaffModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: IzinSiswaEntity) {
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


    return <FormModal<IzinSiswaEntity>
        form={form}
        title={`${selectedData ? "Edit Izin" : "Tambah Izin"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}
        scrollArea={true}
    >
        <SekolahSelect/>
        <SiswaSelect/>
        <FormDate name={"mulai"} label={"mulai"}/>
        <FormDate name={"sampai"} label={"sampai"}/>
        <JenisIzinSelect/>
        <FormTextarea name={"keterangan"} label={"keterangan"}/>
    </FormModal>
}
