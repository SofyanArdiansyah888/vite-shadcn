import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Dispatch, useEffect} from "react";
import FormDate from "@/components/shared/form/form-date.tsx";
import LiburEntity from "@/pages/absensi/libur/_data/libur.entity.ts";
import moment from "moment";
import {usePost, usePut} from "@/hooks/useApi.tsx";

interface ILiburModal {
    selectedData: LiburEntity | undefined,
    setSelectedData: Dispatch<LiburEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function LiburModal({isOpen, handleGroupModal, selectedData, setSelectedData}: ILiburModal) {
    const [form] = Form.useForm();
    const {mutate, isPending} = usePost({
        name: "libur",
        endpoint: "/libur",
    })
    const {mutate: mutateUpdate} = usePut({
        name: "libur",
        endpoint: "/libur",
        id: selectedData?.id.toString() as string
    })
    function handleSubmit(value: LiburEntity) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        selectedData ? mutateUpdate(value) : mutate(value)
        handleGroupModal("modal", false)
    }

    useEffect(() => {
        if (selectedData) {
            form.setFieldsValue({
                ...selectedData,
                mulai: moment(selectedData.mulai),
                sampai: moment(selectedData.sampai)
            })
        }
        if (!isOpen) {
            form.resetFields()
            setSelectedData(undefined)
        }

    }, [form, selectedData, setSelectedData, isOpen])


    return <FormModal<LiburEntity>
        form={form}
        title={`${selectedData ? "Edit Libur" : "Tambah Libur"}`}
        confirmLoading={isPending}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}>
        <FormInput
            name={"nama_libur"}
            label={"Nama Hari Libur"}
        />
        <FormDate name={"mulai"} label={"mulai"}/>
        <FormDate name={"sampai"} label={"sampai"}/>
    </FormModal>
}
