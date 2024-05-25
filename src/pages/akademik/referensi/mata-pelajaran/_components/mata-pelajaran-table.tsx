import {Table, TableProps} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";

import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {deleteAlert} from "@/components/shared/alert.tsx";
import MataPelajaranEntity from "@/pages/akademik/referensi/mata-pelajaran/_data/mata-pelajaran.entity.ts";


export default function MataPelajaranTable({handleGroupModal, params, setSelectedData, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<MataPelajaranEntity>
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {


    const {data, isLoading} = useGetList<MataPelajaranEntity[]>({
        endpoint: "/mata-pelajaran",
        name: "mata-pelajaran",
        params
    })

    function handleEditClick(data: MataPelajaranEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleDeleteClick(data: MataPelajaranEntity) {
        deleteAlert({
            data,
            handleSubmit: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    function handleDetailClick(data: MataPelajaranEntity) {
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
                key: "Mata Pelajaran",
                value: data.mata_pelajaran
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

    const columns: TableProps<MataPelajaranEntity>['columns'] = [
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
            title: 'MataPelajaran',
            dataIndex: 'mata_pelajaran',
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
