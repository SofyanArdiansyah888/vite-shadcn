import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";

import RoleSelect from "@/components/shared/form/select/role-select.tsx";
import UserEntity from "@/pages/pengguna/(pengguna)/data/user.entity.ts";


export interface IPsbModal {
    selectedData: UserEntity | undefined,
    setSelectedData: Dispatch<UserEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function PenggunaModal({isOpen, handleGroupModal, selectedData, setSelectedData}: IPsbModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: UserEntity) {
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


    return <FormModal<UserEntity>
        form={form}
        title={`${selectedData ? "Edit Pengguna" : "Tambah Pengguna"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>
        <FormInput name={"name"} label={"Nama"} rules={[{required: true}]}/>
        <FormInput name={"username"} label={"Username"} rules={[{required: true}]}/>
        <FormInput name={"email"} label={"email"}/>
        <RoleSelect rules={[{required: true}]}/>
        {
            !selectedData && <>
                <FormInput name={"password"} label={"Password"} type={"password"} rules={[{required: true}]}/>
                <FormInput name={"confirm_password"} label={"Confirm Password"} type={"password"}
                           rules={[{required: true}]}/>
            </>
        }


    </FormModal>
}
