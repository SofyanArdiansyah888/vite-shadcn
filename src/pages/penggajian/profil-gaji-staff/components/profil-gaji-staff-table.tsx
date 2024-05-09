import {Table, TableProps} from "antd";
import {EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import useStaffStore from "@/pages/staff/data/useStaffStore.tsx";
import StaffEntity from "@/pages/staff/data/staff.entity.ts";
import {Dispatch} from "react";

export default function ProfilGajiStaffTable({handleGroupModal, setSelectedData}: {
    setDetail: Dispatch<{ key: string, value: string }[]>,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<StaffEntity>
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

    function handleEditClick(data: StaffEntity) {
        setSelectedData(data)
        handleGroupModal("modal", true)
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
                <EditButtonIcon onClick={() => handleEditClick(staff)}/>
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
