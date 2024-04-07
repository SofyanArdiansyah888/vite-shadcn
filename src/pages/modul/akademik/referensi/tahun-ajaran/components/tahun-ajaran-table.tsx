import {Table} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import TahunAjaranEntity from "@/pages/modul/akademik/referensi/tahun-ajaran/data/tahun-ajaran.entity.ts";
import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";

export default function TahunAjaranTable({handleGroupModal, params, setSelectedData}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<TahunAjaranEntity>
}) {

    const {data, isLoading} = useGetList<TahunAjaranEntity[]>({
        endpoint: "/tahun-ajaran",
        name: "tahun-ajaran",
        params
    })


    function handleEditClick(data: TahunAjaranEntity) {
        console.log(data)
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleDeleteClick(data: TahunAjaranEntity) {
        console.log(data)
    }

    function handleDetailClick(data: TahunAjaranEntity) {
        console.log(data)
    }

    const columns = [
        {
            title: 'Nama Sekolah',
            dataIndex: 'sekolah',
            // width: '25%',
            sorter: true,
        },
        {
            title: 'Tahun Ajaran',
            dataIndex: 'tahun_ajaran',
            width: '15%',
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
            width: '15%',
            render: (_: never, item: TahunAjaranEntity) => <div>{tanggalID(item.created_at)}</div>
        },
        {
            title: 'Updated',
            dataIndex: 'updated_at',
            width: '15%',
            render: (_: never, item: TahunAjaranEntity) => <div>{tanggalID(item.updated_at)}</div>
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            width: '100px',
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render: (_: never, data: TahunAjaranEntity) =>
                <div className={"flex gap-1"}>
                    <EditButtonIcon onClick={() => handleEditClick(data)}/>
                    <DetailButtonIcon onClick={() => handleDetailClick(data)}/>
                    <DeleteButtonIcon onClick={() => handleDeleteClick(data)}/>
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
