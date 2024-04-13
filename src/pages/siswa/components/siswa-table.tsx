import {Table, TableProps} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import {Dispatch} from "react";
import {Link} from "@tanstack/react-router";
import {tanggalID} from "@/lib/formatter.ts";
import {deleteAlert} from "@/components/shared/alert.tsx";
import SiswaEntity from "@/pages/siswa/data/siswa.entity.ts";
import useStaffStore from "@/pages/staff/data/useStaffStore.tsx";

export default function SiswaTable({setDetail, handleGroupModal}: {
    setDetail: Dispatch<{ key: string, value: string }[]>,
    handleGroupModal: (key: string, value: boolean) => void,
}) {
    const {filterPayload} = useStaffStore()
    const {data, isLoading} = useGetList<SiswaEntity[]>({
        endpoint: "/siswa",
        name: "siswa",
        params: {
            jenis_kelamin: filterPayload.jenis_kelamin?.value,
            jabatan: filterPayload.jabatan?.value,
            status_kepegawaian: filterPayload.status_kepegawaian?.value,
        }
    })

    const cancel = () => {
    };

    function handleDetailClick(data: SiswaEntity) {
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

    function handleDeleteClick(data: SiswaEntity) {
        // console.log(data.nama)
        deleteAlert({
            data: data.sekolah,
            handleSubmit: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            }
        })
    }

    const columns: TableProps<SiswaEntity>['columns'] = [
        {
            title: 'Nama Siswa',
            dataIndex: 'nama',

            sorter: true,
        },
        {
            title: 'Nik',
            dataIndex: 'nik',
            width: '15%',
        },
        {
            title: 'NISN',
            dataIndex: 'nisn',
            width: '15%',
        },
        {
            title: 'Telepon',
            dataIndex: 'telepon',
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
            width: '17%',
            render: (_, item) => <div>{tanggalID(item.created_at)}</div>
        },
        {
            title: 'Updated',
            dataIndex: 'updated_at',
            width: '17%',
            render: (_, item) => <div>{tanggalID(item.updated_at)}</div>
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            width: '100px',
            render: (_, siswa) =>
                <div className={"flex gap-1"}>
                    <Link to={`/siswa/$id`} params={{id: siswa.id}}>
                        <EditButtonIcon/>
                    </Link>
                    <DetailButtonIcon onClick={() => handleDetailClick(siswa)}/>
                    <DeleteButtonIcon onClick={() => handleDeleteClick(siswa)}/>
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
