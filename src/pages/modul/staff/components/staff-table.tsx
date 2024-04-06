import {Table} from "antd";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import useStaffStore from "@/pages/modul/staff/data/useStaffStore.tsx";
import StaffEntity from "@/pages/modul/staff/data/staff.entity.ts";

export default function StaffTable() {
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

    const columns = [
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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render: (_: never, __: StaffEntity) =>
                <div className={"flex gap-1"}>
                    <EditButtonIcon/>
                    <DetailButtonIcon/>
                    <DeleteButtonIcon/>
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
