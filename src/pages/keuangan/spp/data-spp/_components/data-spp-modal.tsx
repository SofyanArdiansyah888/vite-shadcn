import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import KelasSelect from "@/components/shared/form/select/kelas-select.tsx";
import FormDate from "@/components/shared/form/form-date.tsx";
import FormTextarea from "@/components/shared/form/form-textarea.tsx";
import DataSppEntity from "@/pages/keuangan/spp/data-spp/_data/data-spp.entity.ts";

interface IDataSppModal {
    selectedData: DataSppEntity | undefined,
    setSelectedData: Dispatch<DataSppEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function DataSppModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IDataSppModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: DataSppEntity) {
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


    return <FormModal<DataSppEntity>
        form={form}
        title={`${selectedData ? "Edit Data SPP" : "Tambah Data SPP"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>
        <KelasSelect rules={[{required: true}]} disabled={true}/>
        <FormDate name={"bulan"} label={"bulan"} type={"month"} rules={[{required: true}]} disabled={true}/>
        <FormInput type={"number"} name={"nominal_spp"} label={"Nominal"} rules={[{required: true}]} disabled={true}/>
        <FormInput type={"number"} name={"spp_dibayar"} label={"SPP Dibayar"} rules={[{required: true}]}/>
        <FormDate name={"tanggal_bayar"} label={"Tanggal Pembayaran"} rules={[{required: true}]}/>
        <FormTextarea name={"catatan"} label={"catatan"}/>
    </FormModal>
}
