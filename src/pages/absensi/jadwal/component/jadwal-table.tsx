import {Table, TableProps} from "antd";
import {EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";

import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import SekolahEntity from "@/pages/absensi/libur/data/libur.entity.ts";


export default function JadwalTable({handleGroupModal, params, setSelectedData}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<SekolahEntity>
    // setDetail: Dispatch<{ key: string, value: string }[]>
}) {


    const {data, isLoading} = useGetList<SekolahEntity[]>({
        endpoint: "/sekolah",
        name: "sekolah",
        params
    })

    function handleEditClick(data: SekolahEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
    }


    const columns: TableProps<SekolahEntity>['columns'] = [
        {
            title: 'Nama Sekolah',
            dataIndex: 'nama_sekolah',
            sorter: true,
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
            render: (_, data) =>
                <div className={"flex gap-1"}>
                    <EditButtonIcon tooltip={"Edit Jadwal Absensi Staff"} variant={"blue"}
                                    onClick={() => handleEditClick(data)}/>
                    <EditButtonIcon tooltip={"Edit Jadwal Absensi Siswa"} onClick={() => handleEditClick(data)}/>
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
