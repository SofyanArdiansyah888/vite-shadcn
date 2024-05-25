import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import {Dispatch, useEffect} from "react";
import SekolahSelect from "@/components/shared/form/select/sekolah-select.tsx";
import TahunAjaranSelect from "@/components/shared/form/select/tahun-ajaran-select.tsx";
import TagihanSppEntity from "@/pages/keuangan/spp/tagihan/_data/tagihan-spp.entity.ts";
import KelasSelect from "@/components/shared/form/select/kelas-select.tsx";
import FormDate from "@/components/shared/form/form-date.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";


interface IKelasModal {
    selectedData: TagihanSppEntity | undefined,
    setSelectedData: Dispatch<TagihanSppEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function TagihanSppModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IKelasModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: TagihanSppEntity) {
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


    return <FormModal<TagihanSppEntity>
        form={form}
        title={`${selectedData ? "Edit Tagihan" : "Tambah Tagihan"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>
        <SekolahSelect/>
        <TahunAjaranSelect/>
        <KelasSelect/>
        <FormDate name={"bulan"} label={"bulan"} type={"month"}/>
        <FormInput name={"nominal_spp"} label={"Nominal SPP"} type={"number"}/>
    </FormModal>
}
