import type {TableProps} from 'antd';
import {Table} from "antd";
import {DetailButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";

import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import JadwalPengajarEntity from "@/pages/akademik/jadwal-pengajar/data/jadwal-pengajar.entity.ts";

export default function JadwalPengajarTable({handleGroupModal, params, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {
    const {data, isLoading} = useGetList<JadwalPengajarEntity[]>({
        endpoint: "/jadwal-pengajar",
        name: "jadwal-pengajar",
        params
    })

    function handleDetailClick(data: JadwalPengajarEntity) {
        const temp = [
            {
                key: 'Hari',
                value: data.hari,
            },
            {
                key: 'Kelas',
                value: data.kelas,
            },
            {
                key: 'Mulai',
                value: data.mulai,
            },
            {
                key: 'Selesai',
                value: data.selesai,
            },
            {
                key: 'Catatan',
                value: data.catatan,
            },
            {
                key: 'Pengajar',
                value: data.guru,
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

    const columns: TableProps<JadwalPengajarEntity>['columns'] = [
        {
            title: 'Hari',
            dataIndex: 'hari',
            sorter: true,
        },
        {
            title: 'Kelas',
            dataIndex: 'kelas',
            width: '15%',
        },
        {
            title: 'Mulai',
            dataIndex: 'mulai',
        },
        {
            title: 'Selesai',
            dataIndex: 'selesai',
        },
        {
            title: 'Catatan',
            dataIndex: 'catatan',
        },
        {
            title: 'Pengajar',
            dataIndex: 'guru',
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
