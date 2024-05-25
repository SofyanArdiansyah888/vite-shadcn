import {Table, TableProps} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";

import {sanitizeModalDetailObject, tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {deleteAlert} from "@/components/shared/alert.tsx";
import TagihanSppEntity from "@/pages/keuangan/spp/tagihan/_data/tagihan-spp.entity.ts";


export default function TagihanSppTable({handleGroupModal, params, setSelectedData, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<TagihanSppEntity>
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {


    const {data, isLoading} = useGetList<TagihanSppEntity[]>({
        endpoint: "/tagihan-spp",
        name: "tagihan-spp",
        params
    })

    function handleEditClick(data: TagihanSppEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleDeleteClick(data: TagihanSppEntity) {
        deleteAlert({
            data,
            handleSubmit: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    function handleDetailClick(data: TagihanSppEntity) {
        setDetail(sanitizeModalDetailObject({items: data}))
        handleGroupModal("detailModal", true)
    }

    const columns: TableProps<TagihanSppEntity>['columns'] = [
        {
            title: 'Nama Sekolah',
            dataIndex: 'nama_sekolah',
            sorter: true,
        },
        {
            title: 'Tahun Ajaran',
            dataIndex: 'tahun_ajaran',
            width: '15%',
        },
        {
            title: 'Bulan',
            dataIndex: 'bulan',
        },
        {
            title: 'Kelas',
            dataIndex: 'kelas',
        },
        {
            title: 'Nominal SPP',
            dataIndex: 'nominal_spp',
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
