import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import UserEntity from "@/pages/pengguna/(pengguna)/data/user.entity.ts";


export interface IResetPasswordModal {
    selectedData: UserEntity | undefined,
    setSelectedData: Dispatch<UserEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function ResetPasswordModal({
                                               isOpen,
                                               handleGroupModal,
                                               selectedData,
                                               setSelectedData
                                           }: IResetPasswordModal) {
    const [form] = Form.useForm();

    function handleSubmit(value: UserEntity) {
        console.log(value)
        handleGroupModal("resetPasswordModal", false)
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
        title={"Reset Password"}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("resetPasswordModal", value as boolean)}
        onSubmit={handleSubmit}>

        <FormInput name={"password"} label={"Password"} type={"password"} rules={[{required: true}]}/>
        <FormInput name={"confirm_password"} label={"Confirm Password"} type={"password"}
                   rules={[{required: true}]}/>

    </FormModal>
}
