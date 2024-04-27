import {Table, TableProps} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useDelete, useGetList} from "@/hooks/useApi.tsx";

import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {deleteAlert} from "@/components/shared/alert.tsx";
import LiburEntity from "@/pages/absensi/libur/data/libur.entity.ts";


export default function LiburTable({handleGroupModal, params, setSelectedData, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<LiburEntity>,
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {
    const {data, isLoading} = useGetList<LiburEntity[]>({
        endpoint: "/libur",
        name: "libur",
        params
    })

    const {mutate} = useDelete({
        endpoint: "/libur",
        name: "libur"
    })

    function handleEditClick(data: LiburEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleDeleteClick(data: LiburEntity) {
        deleteAlert({
            data: data.nama_libur,
            handleSubmit: async () => {
               mutate(data.id)
            }
        })
    }

    function handleDetailClick(data: LiburEntity) {
        const temp = Object.entries(data)
            .map((item) => {
                let value = item[1]
                if (["created_at", "updated_at", "dari", 'sampai'].includes(item[0])) {
                    value = tanggalID(value)
                }
                return {
                    key: item[0].replace("_", " "),
                    value
                }
            })
        setDetail(temp)
        handleGroupModal("detailModal", true)
    }

    const columns: TableProps<LiburEntity>['columns'] = [
        {
            title: 'Hari Libur',
            dataIndex: 'nama_libur',
            sorter: true,
        },
        {
            title: 'Dari',
            dataIndex: 'dari',
            render: (_, item) => <div>{tanggalID(item.mulai)}</div>
        },
        {
            title: 'Sampai',
            dataIndex: 'sampai',
            render: (_, item) => <div>{tanggalID(item.sampai)}</div>
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
