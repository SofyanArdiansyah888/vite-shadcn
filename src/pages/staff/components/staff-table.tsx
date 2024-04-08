import {Table, TableProps} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import useStaffStore from "@/pages/staff/data/useStaffStore.tsx";
import StaffEntity from "@/pages/staff/data/staff.entity.ts";
import {Dispatch} from "react";
import {Link} from "@tanstack/react-router";
import {tanggalID} from "@/lib/formatter.ts";
import {deleteAlert} from "@/components/shared/alert.tsx";

export default function StaffTable({setDetail, handleGroupModal}: {
    setDetail: Dispatch<{ key: string, value: string }[]>,
    handleGroupModal: (key: string, value: boolean) => void,
}) {
    const {filterPayload} = useStaffStore()
    const {data, isLoading} = useGetList<StaffEntity[]>({
        endpoint: "/staff",
        name: "staff",
        params: {
            jenis_kelamin: filterPayload.jenis_kelamin?.value,
            jabatan: filterPayload.jabatan?.value,
            status_kepegawaian: filterPayload.status_kepegawaian?.value,
        }
    })

    const cancel = () => {
    };

    function handleDetailClick(data: StaffEntity) {
        const temp = Object.entries(data)
            .filter((item) => !["deleted_at", "password", "id"].includes(item[0]))
            .map((item) => {
                let value = item[1]
                if (["created_at", "updated_at", "tanggal_lahir"].includes(item[0])) {
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

    function handleDeleteClick(data: StaffEntity) {
        console.log(data.nama)
        deleteAlert({
            data: data.nama,
            handleSubmit: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    const columns: TableProps<StaffEntity>['columns'] = [
        {
            title: 'Nama Staff',
            dataIndex: 'nama',
            width: '25%',
            sorter: true,
        },
        {
            title: 'Nik',
            dataIndex: 'nik',
            width: '15%',
        },
        {
            title: 'Telepon',
            dataIndex: 'telepon',
        },
        {
            title: 'Jabatan',
            dataIndex: 'jabatan',
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            width: '100px',
            render: (_, staff) =>
                <div className={"flex gap-1"}>
                    <Link to={`/staff/$id`} params={{id: staff.id}}>
                        <EditButtonIcon/>
                    </Link>
                    <DetailButtonIcon onClick={() => handleDetailClick(staff)}/>
                    <DeleteButtonIcon onClick={() => handleDeleteClick(staff)}/>
                </div>
            ,
        },
    ];

    return <Table
        dataSource={data}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
            onChange: cancel,
        }}
        size={"small"}
        scroll={{
            y: 400
        }}
        loading={isLoading}
    />
}
