import {Table, TableProps} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import {sanitizeModalDetailObject, tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {deleteAlert} from "@/components/shared/alert.tsx";
import PemasukanEntity from "@/pages/keuangan/pemasukan/_data/pemasukan.entity.ts";

export default function PemasukanTable({handleGroupModal, params, setSelectedData, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<PemasukanEntity>
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {


    const {data, isLoading} = useGetList<PemasukanEntity[]>({
        endpoint: "/pemasukan",
        name: "pemasukan",
        params
    })

    function handleEditClick(data: PemasukanEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleDeleteClick(data: PemasukanEntity) {
        deleteAlert({
            data,
            handleSubmit: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    function handleDetailClick(data: PemasukanEntity) {
        setDetail(sanitizeModalDetailObject({items: data}))
        handleGroupModal("detailModal", true)
    }

    const columns: TableProps<PemasukanEntity>['columns'] = [
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
            dataIndex: 'kategori_penerimaan',
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
