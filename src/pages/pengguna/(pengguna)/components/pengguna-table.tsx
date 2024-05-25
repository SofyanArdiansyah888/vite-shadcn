import {Table, TableProps} from "antd";
import {DeleteButtonIcon, EditButtonIcon, PasswordButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";

import {tanggalID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {deleteAlert} from "@/components/shared/alert.tsx";
import UserEntity from "@/pages/pengguna/(pengguna)/data/user.entity.ts";


export default function PenggunaTable({handleGroupModal, params, setSelectedData}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<UserEntity>
}) {


    const {data, isLoading} = useGetList<UserEntity[]>({
        endpoint: "/user",
        name: "user",
        params
    })

    function handleEditClick(data: UserEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
    }

    function handleResetPasswordClick(data: UserEntity){
        setSelectedData(data)
        handleGroupModal("resetPasswordModal", true)
    }

    function handleDeleteClick(data: UserEntity) {
        deleteAlert({
            data,
            handleSubmit: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }


    const columns: TableProps<UserEntity>['columns'] = [
        {
            title: 'Nama',
            dataIndex: 'name',
            // width: '25%',
            sorter: true,
        },
        {
            title: 'Username',
            dataIndex: 'name',
            // width: '25%',
            sorter: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            // width: '25%',
            sorter: true,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            // width: '25%',
            sorter: true,
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
                    <PasswordButtonIcon onClick={() => handleResetPasswordClick(data)}/>
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
