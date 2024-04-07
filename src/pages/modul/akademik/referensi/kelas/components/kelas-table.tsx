import {Table} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import KelasEntity from "@/pages/modul/akademik/referensi/kelas/data/kelas.entity.ts";
import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";

export default function KelasTable({handleGroupModal, params, setSelectedData}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<KelasEntity>
}) {

    const {data, isLoading} = useGetList<KelasEntity[]>({
        endpoint: "/kelas",
        name: "kelas",
        params
    })


    function handleEditClick(data: KelasEntity) {
        console.log(data)
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleDeleteClick(data: KelasEntity) {
        console.log(data)
    }

    function handleDetailClick(data: KelasEntity) {
        console.log(data)
    }

    const columns = [
        {
            title: 'Nama Sekolah',
            dataIndex: 'nama_sekolah',
            // width: '25%',
            sorter: true,
        },
        {
            title: 'Tahun Ajaran',
            dataIndex: 'tahun_ajaran',
            width: '15%',
        },
        {
            title: 'Wali Kelas',
            dataIndex: 'wali_kelas',
        },
        {
            title: 'Nama Kelas',
            dataIndex: 'nama_kelas',
            width: '15%',
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
            width: '15%',
            render: (_: never, item: KelasEntity) => <div>{tanggalID(item.created_at)}</div>
        },
        {
            title: 'Updated',
            dataIndex: 'updated_at',
            width: '15%',
            render: (_: never, item: KelasEntity) => <div>{tanggalID(item.updated_at)}</div>
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            width: '100px',
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render: (_: never, data: KelasEntity) =>
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
