import {Table, TableProps} from "antd";
import {DetailButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import InformasiEntity from "@/pages/informasi/data/informasi.entity.ts";
import {IDetailInfoModal} from "@/components/shared/modal/detail-modal.tsx";

export default function InformasiTable({handleGroupModal, params, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setDetail: Dispatch<IDetailInfoModal[]>
}) {

    const {data, isLoading} = useGetList<InformasiEntity[]>({
        endpoint: "/informasi",
        name: "informasi",
        params
    })

    function handleDetailClick(data: InformasiEntity) {
        const temp = [
            {
                key: "Dikirim Pada",
                value: tanggalID(data.created_at),
                colspan: "col-span-2"
            },
            {
                key: "Sekolah",
                value: data.sekolah,
                colspan: "col-span-2"
            },
            {
                key: "Judul",
                value: data.judul,
                colspan: "col-span-2"
            },
            {
                key: "Konten",
                value: data.konten,
                colspan: "col-span-2"
            },
        ]
        setDetail(temp)
        handleGroupModal("detailModal", true)
    }

    const columns: TableProps<InformasiEntity>['columns'] = [
        {
            title: 'Dikirim Pada',
            dataIndex: 'created_at',
            width: '12%',
            render: (_, item) => <div>{tanggalID(item.created_at)}</div>
        },
        {
            title: 'Nama Sekolah',
            dataIndex: 'sekolah',
            sorter: true,
            width: '20%',
        },
        {
            title: 'Judul',
            dataIndex: 'judul',
            width: '20%',
        },
        {
            title: 'Konten',
            dataIndex: 'konten',
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            width: '100px',
            render: (_, data) =>
                <div className={"flex gap-1"}>
                    <DetailButtonIcon onClick={() => handleDetailClick(data)}/>
                </div>
            ,
        },
    ];


    return <Table
        dataSource={data}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
            onChange: () => {
            },
        }}
        size={"small"}
        scroll={{
            y: 400
        }}
        loading={isLoading}
    />
}
