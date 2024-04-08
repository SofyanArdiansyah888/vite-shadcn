import {Table, TableProps} from "antd";
import {EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";

import {IUseParams} from "@/hooks/useParams.tsx";
import {Link} from "@tanstack/react-router";
import AbsensiPertemuanEntity from "@/pages/akademik/absensi-pertemuan/data/absensi-pertemuan.entity.ts";
import {tanggalID} from "@/lib/formatter.ts";

export default function AbsensiPertemuanTable({params}: {
    params: IUseParams,
}) {
    const {data, isLoading} = useGetList<AbsensiPertemuanEntity[]>({
        endpoint: "/absensi-pertemuan",
        name: "absensi-pertemuan",
        params
    })
    const columns: TableProps<AbsensiPertemuanEntity>['columns'] = [
        {
            title: 'Sekolah',
            dataIndex: 'sekolah',
            sorter: true,
        },
        {
            title: 'Tahun Ajaran',
            dataIndex: 'tahun_ajaran',
            width: '10%',
        },
        {
            title: 'Kelas',
            dataIndex: 'kelas',
            width: '10%',
        },
        {
            title: 'Tanggal',
            dataIndex: 'tanggal',
            width: '10%',
        },
        {
            title: 'Matapelajaran',
            dataIndex: 'matapelajaran',
        },
        {
            title: 'Guru',
            dataIndex: 'guru',
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
            render: (_, item) => tanggalID(item.created_at)
        },

        {
            title: 'Action',
            dataIndex: 'operation',
            width: '100px',
            render: (_, data) =>
                <div className={"flex gap-1"}>
                    <Link to={`/akademik/absensi-pertemuan/detail/$id`} params={{
                        id: data.id
                    }}>
                        <EditButtonIcon/>
                    </Link>
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
