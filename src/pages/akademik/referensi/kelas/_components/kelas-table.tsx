import {Table, TableProps} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import KelasEntity from "@/pages/akademik/referensi/kelas/_data/kelas.entity.ts";
import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {deleteAlert} from "@/components/shared/alert.tsx";

export default function KelasTable({handleGroupModal, params, setSelectedData, setDetail}: {
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

    function handleEditClick(data: KelasEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleDeleteClick(data: KelasEntity) {
        deleteAlert({
            data,
            handleSubmit: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    function handleDetailClick(data: KelasEntity) {
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

    const columns: TableProps<KelasEntity>['columns'] = [
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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
