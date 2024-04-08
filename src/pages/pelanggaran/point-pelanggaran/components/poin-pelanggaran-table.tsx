import {Table, TableProps} from "antd";
import {DetailButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import PoinPelanggaranEntity from "@/pages/pelanggaran/point-pelanggaran/data/poin-pelanggaran.entity.ts";


export default function PoinPelanggaranTable({handleGroupModal, params, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {


    const {data, isLoading} = useGetList<PoinPelanggaranEntity[]>({
        endpoint: "/poin-pelanggaran",
        name: "poin-pelanggaran",
        params
    })


    function handleDetailClick(data: PoinPelanggaranEntity) {
        const temp = [
            {
                key: "Nama Sekolah",
                value: data.sekolah
            },
            {
                key: "Jumlah Pelanggaran",
                value: data.jumlah_pelanggaran
            },
            {
                key: "Poin",
                value: data.poin,
                colspan: "col-span-2"
            },
            {
                key: "Created",
                value: tanggalID(data.created_at)
            },
            {
                key: "Updated",
                value: tanggalID(data.updated_at)
            }
        ]
        setDetail(temp)
        handleGroupModal("detailModal", true)
    }

    const columns: TableProps<PoinPelanggaranEntity>['columns'] = [
        {
            title: 'Sekolah',
            dataIndex: 'sekolah',
            sorter: true,
        },
        {
            title: 'Pelanggaran',
            dataIndex: 'pelanggaran',
            width: '20%',
        },
        {
            title: 'Poin',
            dataIndex: 'poin',
            width: '15%',
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
            width: '15%',
            render: (_, item) => <div>{tanggalID(item.created_at)}</div>
        },
        {
            title: 'Updated',
            dataIndex: 'updated_at',
            width: '15%',
            render: (_, item) => <div>{tanggalID(item.updated_at)}</div>
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            width: '100px',
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render: (_, data) =>
                <div className={"flex gap-1"}>
                    <DetailButtonIcon onClick={() => handleDetailClick(data)}/>
                    {/*<DeleteButtonIcon onClick={() => handleDeleteClick(data)}/>*/}
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
