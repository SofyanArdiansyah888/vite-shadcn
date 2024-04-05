import React, {useEffect, useState} from "react";
import {Form, FormInstance, Modal} from "antd";
import {FilterButton} from "@/components/ui/button.tsx";


interface IFilterModal<T> {
    form: FormInstance<T>
    title: string,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    confirmLoading?: boolean,
    setConfirmLoading?: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode,
    onSubmit: (values: T) => void;
    // handleFilterClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

export default function FilterModal<T>({
                                        form,
                                        title,
                                        isOpen,
                                        children,
                                        setIsOpen,
                                        confirmLoading,
                                        onSubmit
                                    }: IFilterModal<T>) {
    const [formInstance, setFormInstance] = useState<FormInstance>();
    useEffect(() => {
        setFormInstance(form);
    }, [form]);

    async function handleOKModal() {
        try {
            const values = await formInstance?.validateFields();
            formInstance?.resetFields();
            onSubmit(values)
        } catch (error) {
            console.log('Failed:', error);
        }
    }

    return <>
        <FilterButton onClick={() => setIsOpen(true)}/>
        <Modal
            title={title}
            open={isOpen}
            onOk={handleOKModal}
            confirmLoading={confirmLoading}
            onCancel={() => setIsOpen(false)}
            destroyOnClose
            className={"!w-[350px]"}
        >
            <section className={"py-6"}>
                <Form
                    form={form}
                    layout={"vertical"}
                    className={"!space-y-4"}
                >
                    {children}
                </Form>
            </section>
        </Modal>
    </>
}
