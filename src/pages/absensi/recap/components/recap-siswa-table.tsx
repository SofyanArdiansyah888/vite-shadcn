import {Table, TableProps} from "antd";
import {useGetList} from "@/hooks/useApi.tsx";
import {IUseParams} from "@/hooks/useParams.tsx";
import AgendaEntity from "@/pages/agenda/data/agenda.entity.ts";

export default function RecapSiswaTable({params}: {
    params: IUseParams,
}) {

    const {data, isLoading} = useGetList<AgendaEntity[]>({
        endpoint: "/recap-siswa",
        name: "recap-siswa",
        params
    })


    const columns: TableProps<AgendaEntity>['columns'] = [
        {
            title: 'Nama',
            dataIndex: 'nama',
            sorter: true,
            width: '15%',
        },

        {
            title: 'Jumlah Hari',
            dataIndex: 'jumlah_hari',
        },
        {
            title: 'Hadir',
            dataIndex: 'hadir',
        },
        {
            title: 'Sakit',
            dataIndex: 'sakit',
        },
        {
            title: 'Izin',
            dataIndex: 'izin',
        },
        {
            title: 'Alfa',
            dataIndex: 'alfa',
        },
        {
            title: 'TL',
            dataIndex: 'terlambat',
        },
        {
            title: 'PC',
            dataIndex: 'pulang_cepat',
        },
        {
            title: 'TAM',
            dataIndex: 'tidak_absen_masuk',
        },
        {
            title: 'TPL',
            dataIndex: 'tidak_absen_pulang',
        },


        // {
        //     title: 'Action',
        //     dataIndex: 'operation',
        //     width: '100px',
        //     render: (_, data) =>
        //         <div className={"flex gap-1"}>
        //             {/*<EditButtonIcon onClick={() => handleEditClick(data)}/>*/}
        //             <DetailButtonIcon onClick={() => handleDetailClick(data)}/>
        //             {/*<DeleteButtonIcon onClick={() => handleDeleteClick(data)}/>*/}
        //         </div>
        //     ,
        // },
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
