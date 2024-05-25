import {Table, TableProps} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import {sanitizeModalDetailObject, tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {deleteAlert} from "@/components/shared/alert.tsx";
import PengeluaranEntity from "@/pages/keuangan/pengeluaran/_data/pengeluaran.entity.ts";


export default function PengeluaranTable({handleGroupModal, params, setSelectedData, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<PengeluaranEntity>
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {


    const {data, isLoading} = useGetList<PengeluaranEntity[]>({
        endpoint: "/pengeluaran",
        name: "pengeluaran",
        params
    })

    function handleEditClick(data: PengeluaranEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleDeleteClick(data: PengeluaranEntity) {
        deleteAlert({
            data,
            handleSubmit: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    function handleDetailClick(data: PengeluaranEntity) {
        setDetail(sanitizeModalDetailObject({items: data}))
        handleGroupModal("detailModal", true)
    }

    const columns: TableProps<PengeluaranEntity>['columns'] = [
        {
            title: 'Nama Sekolah',
            dataIndex: 'nama_sekolah',
            sorter: true,
        },
        {
            title: 'Tanggal',
            dataIndex: 'tanggal',
            render: (_, item) => <div>{tanggalID(item.created_at)}</div>
        },
        {
            title: 'Kategori',
            dataIndex: 'kategori_pengeluaran',
        },
        {
            title: 'Catatan',
            dataIndex: 'catatan',
        },
        {
            title: 'Nominal',
            dataIndex: 'nominal',
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
            // width: '15%',
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
