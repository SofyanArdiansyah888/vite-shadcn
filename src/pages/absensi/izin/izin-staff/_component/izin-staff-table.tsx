import {Table, TableProps} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";

import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {deleteAlert} from "@/components/shared/alert.tsx";
import IzinStaffEntity from "@/pages/absensi/izin/izin-staff/_data/izin-staff.entity.ts";


export default function IzinStaffTable({handleGroupModal, params, setSelectedData, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<IzinStaffEntity>
    setDetail: Dispatch<{ key: string, value: string }[]>
}) {


    const {data, isLoading} = useGetList<IzinStaffEntity[]>({
        endpoint: "/izin-staff",
        name: "izin-staff",
        params
    })

    function handleEditClick(data: IzinStaffEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleDeleteClick(data: IzinStaffEntity) {
        deleteAlert({
            data,
            handleSubmit: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    function handleDetailClick(data: IzinStaffEntity) {
        const temp = Object.entries(data)
            .filter((item) => !["deleted_at", "id"].includes(item[0]))
            .map((item) => {
                let value = item[1]
                if (["created_at", "updated_at","dari",'sampai'].includes(item[0])) {
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

    const columns: TableProps<IzinStaffEntity>['columns'] = [
        {
            title: 'Sekolah',
            dataIndex: 'sekolah',
            sorter: true,
        },
        {
            title: 'Staff',
            dataIndex: 'staff',
        },
        {
            title: 'Mulai',
            dataIndex: 'mulai',
            render: (_, item) => <div>{tanggalID(item.mulai)}</div>
        },
        {
            title: 'Sampai',
            dataIndex: 'sampai',
            render: (_, item) => <div>{tanggalID(item.sampai)}</div>
        },
        {
            title: 'Jenis Izin',
            dataIndex: 'jenis_izin',
        },
        {
            title: 'Keterangan',
            dataIndex: 'keterangan',
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
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
