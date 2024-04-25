import FormModal from "@/components/shared/modal/form-modal.tsx";
import {Form} from "antd";
import {Table as ShadTable, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx"
import {Dispatch, useEffect} from "react";
import LiburEntity from "@/pages/absensi/libur/data/libur.entity.ts";
import moment from "moment";
import FormDate from "@/components/shared/form/form-date.tsx";

interface ILiburModal {
    selectedData: LiburEntity | undefined,
    setSelectedData: Dispatch<LiburEntity | undefined>,
    isOpen: boolean,
    handleGroupModal: (key: string, value: boolean) => void
}

export default function JadwalModal({isOpen, handleGroupModal, selectedData, setSelectedData}: ILiburModal) {
    const [form] = Form.useForm();
    // const mutation= usePost({
    //     name:"libur",
    //     endpoint:"/libur",
    // })
    function handleSubmit(value: LiburEntity) {
        console.log(value)
        // mutation.mutate(value)
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

    const hari = [
        "Senin", "Selasa", 'Rabu', "Kamis", "Jumat", "Sabtu", "Minggu"
    ]
    return <FormModal<LiburEntity>
        form={form}
        title={`${selectedData ? "Edit Jadwal" : "Tambah Jadwal"}`}
        isOpen={isOpen}
        setIsOpen={(value) => handleGroupModal("modal", value as boolean)}
        onSubmit={handleSubmit}
        modalClass={"!w-[700px]"}
    >
        <ShadTable >
            <TableHeader>
                <TableRow className={"bg-zinc-100"}>
                    <TableHead className={"text-center"}>Hari</TableHead>
                    <TableHead className={"text-center"}>Mulai Masuk</TableHead>
                    <TableHead className={"text-center"}>Batas Masuk</TableHead>
                    <TableHead className={"text-center"}>Mulai Pulang</TableHead>
                    <TableHead className={"text-center"}>Batas Pulang</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    hari.map((item, index) => <TableRow key={index}>
                        <TableCell>{item}</TableCell>
                        <TableCell>
                            <FormDate name={""} label={""} type={"time"}></FormDate>
                        </TableCell>
                        <TableCell>
                            <FormDate name={""} label={""} type={"time"}></FormDate>
                        </TableCell>
                        <TableCell>
                            <FormDate name={""} label={""} type={"time"}></FormDate>
                        </TableCell>
                        <TableCell>
                            <FormDate name={""} label={""} type={"time"}></FormDate>
                        </TableCell>
                    </TableRow>)}
            </TableBody>
        </ShadTable>
    </FormModal>
}
