import {Table, TableProps} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {deleteAlert} from "@/components/shared/alert.tsx";
import PelanggaranSiswaEntity from "@/pages/pelanggaran/pelanggaran-siswa/_data/pelanggaran-siswa.entity.ts";

export default function PelanggaranSiswaTable({handleGroupModal, params, setSelectedData, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<PelanggaranSiswaEntity>
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {


    const {data, isLoading} = useGetList<PelanggaranSiswaEntity[]>({
        endpoint: "/pelanggaran-siswa",
        name: "pelanggaran-siswa",
        params
    })

    function handleEditClick(data: PelanggaranSiswaEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleDeleteClick(data: PelanggaranSiswaEntity) {
        deleteAlert({
            data,
            handleSubmit: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    function handleDetailClick(data: PelanggaranSiswaEntity) {
        const temp = [
            {
                key: "Nama Sekolah",
                value: data.sekolah
            },
            {
                key: "Tahun Ajaran",
                value: data.tahun_ajaran
            },
            {
                key: "Kelas",
                value: data.kelas
            },
            {
                key: "Siswa",
                value: data.siswa
            },
            {
                key: "Pelanggaran",
                value: data.pelanggaran
            },
            {
                key: "Tanggal",
                value: tanggalID(data.tanggal)
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

    const columns: TableProps<PelanggaranSiswaEntity>['columns'] = [
        {
            title: 'Sekolah',
            dataIndex: 'sekolah',
            sorter: true,
        },
        {
            title: 'Tahun Ajaran',
            dataIndex: 'tahun_ajaran',
            sorter: true,
        },
        {
            title: 'Kelas',
            dataIndex: 'kelas',
            sorter: true,
            width:"100px"
        },
        {
            title: 'Siswa',
            dataIndex: 'siswa',
            sorter: true,
        },
        {
            title: 'Pelanggaran',
            dataIndex: 'pelanggaran',
        },
        {
            title: 'Tanggal',
            dataIndex: 'tanggal',
            render: (_, item) => <div>{tanggalID(item.tanggal)}</div>
        },
        {
            title: 'Poin',
            dataIndex: 'poin',
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
            width: '15%',
            render: (_, item) => <div>{tanggalID(item.created_at)}</div>
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            width: '100px',
            render: (_, data) =>
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
