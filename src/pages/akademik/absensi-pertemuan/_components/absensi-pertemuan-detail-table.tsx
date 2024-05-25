import {Table, TableProps} from "antd";
import AbsensiPertemuanEntity, {
    AbsensiSiswaEntity
} from "@/pages/akademik/absensi-pertemuan/_data/absensi-pertemuan.entity.ts";
import {CheckIcon} from "lucide-react";


export default function AbsensiPertemuanDetailTable({data, isLoading}: {
    data: AbsensiPertemuanEntity | undefined,
    isLoading: boolean
}) {
    const columns: TableProps<AbsensiSiswaEntity>['columns'] = [
        {
            title: 'Nama',
            dataIndex: 'nama',
            sorter: true,
        },
        {
            title: 'Absen',
            dataIndex: 'absen',
            width: '10%',
            render: (_, item) => <div className={"text-center"}>{item.absen ? <CheckIcon strokeWidth={1}/> : "-"}
            </div>
        },
        {
            title: 'Hadir',
            dataIndex: 'hadir',
            width: '10%',
            render: (_, item) => <div className={"text-center"}>{item.hadir ? <CheckIcon strokeWidth={1}/> : "-"}
            </div>
        },
        {
            title: 'Izin',
            dataIndex: 'izin',
            width: '10%',
            render: (_, item) => <div className={"text-center"}>{item.izin ? <CheckIcon strokeWidth={1}/> : "-"}
            </div>
        },
        {
            title: 'Sakit',
            dataIndex: 'sakit',
            width: '10%',
            render: (_, item) => <div className={"text-center"}>{item.sakit ? <CheckIcon strokeWidth={1}/> : "-"}
            </div>
        },
    ];


    return <Table
        dataSource={data?.absensi}
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
