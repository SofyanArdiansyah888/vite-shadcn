import {Table, TableProps} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {deleteAlert} from "@/components/shared/alert.tsx";
import PotonganEntity from "@/pages/penggajian/potongan/data/potongan.entity.ts";


export default function PotonganTable({handleGroupModal, params, setSelectedData, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<PotonganEntity>
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {


    const {data, isLoading} = useGetList<PotonganEntity[]>({
        endpoint: "/honor-guru",
        name: "honor-guru",
        params
    })

    function handleEditClick(data: PotonganEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleDeleteClick(data: PotonganEntity) {
        deleteAlert({
            data,
            handleSubmit: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    function handleDetailClick(data: PotonganEntity) {
        const temp = Object.entries(data)
            .filter((item) => !["deleted_at", "id"].includes(item[0]))
            .map((item) => {
                let value = item[1]
                if (["created_at", "updated_at"].includes(item[0])) {
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

    const columns: TableProps<PotonganEntity>['columns'] = [
        {
            title: 'Nama Sekolah',
            dataIndex: 'sekolah',
            sorter: true,
        },
        {
            title: 'Potongan',
            dataIndex: 'potongan',
            width: '15%',
        },
        {
            title: 'Nominal',
            dataIndex: 'nominal',
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
