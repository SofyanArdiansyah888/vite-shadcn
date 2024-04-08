import {InfoIcon} from "lucide-react";
import {Modal} from "antd";

const { confirm } = Modal;
export function deleteAlert({
    data,
    handleSubmit
                     }: {
    data: any,
    handleSubmit: () => void
}){
    confirm({
        title: 'Kamu yakin ingin menghapus data ini ?',
        icon: <InfoIcon className={"mr-2 text-destructive"} strokeWidth={1} />,
        content: `${data}`,
        okText: 'Ya',
        okType: 'danger',
        cancelText: 'Tidak',
        onOk: handleSubmit,
    });
}
