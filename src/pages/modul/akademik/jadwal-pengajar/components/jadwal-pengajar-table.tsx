import type {TableProps} from 'antd';
import {Table} from "antd";
import {DetailButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";

import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import JadwalPengajarEntity from "@/pages/modul/akademik/jadwal-pengajar/data/jadwal-pengajar.entity.ts";

export default function JadwalPengajarTable({handleGroupModal, params, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {
    const {data, isLoading} = useGetList<JadwalPengajarEntity[]>({
        endpoint: "/kelas",
        name: "kelas",
        params
    })

    function handleDetailClick(data: JadwalPengajarEntity) {
        const temp = [
            {
                key: "Nama Sekolah",
                value: data.sekolah
            },
            {
                key: "Nama Kelas",
                value: data.kelas
            },
            {
                key: "Tahun Ajaran",
                value: data.tahun_ajaran
            },
            {
                key: "Wali Kelas",
                value: data.wali_kelas
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
            title: 'Wali Kelas',
            dataIndex: 'wali_kelas',
        },
        {
            title: 'Nama Kelas',
            dataIndex: 'kelas',
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
