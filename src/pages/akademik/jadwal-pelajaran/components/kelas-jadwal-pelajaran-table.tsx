import {Table, TableProps} from "antd";
import {EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import KelasEntity from "@/pages/akademik/referensi/kelas/data/kelas.entity.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {Link} from "@tanstack/react-router";

export default function KelasJadwalPelajaranTable({params}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<KelasEntity>
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {
    const {data, isLoading} = useGetList<KelasEntity[]>({
        endpoint: "/kelas",
        name: "kelas",
        params
    })
    const columns: TableProps<KelasEntity>['columns'] = [
        {
            title: 'Nama Sekolah',
            dataIndex: 'sekolah',
            sorter: true,
        },
        {
            title: 'Tahun Ajaran',
            dataIndex: 'tahun_ajaran',
            width: '15%',
        },
        {
            title: 'Nama Kelas',
            dataIndex: 'kelas',
        },

        {
            title: 'Action',
            dataIndex: 'operation',
            width: '100px',
            render: (_, data) =>
                <div className={"flex gap-1"}>
                    <Link to={`/akademik/jadwal-pelajaran/kelas/$id`} params={{
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
