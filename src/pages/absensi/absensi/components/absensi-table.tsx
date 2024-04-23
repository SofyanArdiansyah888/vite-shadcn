import {Table, TableProps} from "antd";
import {DetailButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import {tanggalID, tanggalJamID} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";
import {IDetailInfoModal} from "@/components/shared/modal/detail-modal.tsx";
import AgendaEntity from "@/pages/agenda/data/agenda.entity.ts";

export default function AbsensiTable({handleGroupModal, params, setDetail}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setDetail: Dispatch<IDetailInfoModal[]>
}) {

    const {data, isLoading} = useGetList<AgendaEntity[]>({
        endpoint: "/agenda",
        name: "agenda",
        params
    })


    function handleDetailClick(data: AgendaEntity) {
        const temp = [
            {
                key: "Sekolah",
                value: data.sekolah,
            },
            {
                key: "Acara",
                value: data.acara,
            },
            {
                key: "Dari",
                value: data.dari,
            },
            {
                key: "Sampai",
                value: data.sampai,
            },

            {
                key: "Keterangan",
                value: data.keterangan,
                colspan: "col-span-2"
            },
            {
                key: "Created",
                value: tanggalID(data.created_at),
            },
            {
                key: "Updated",
                value: tanggalID(data.updated_at),
            },
        ]
        setDetail(temp)
        handleGroupModal("detailModal", true)
    }

    const columns: TableProps<AgendaEntity>['columns'] = [
        {
            title: 'Nama Sekolah',
            dataIndex: 'sekolah',
            sorter: true,
            width: '15%',
        },
        {
            title: 'Acara',
            dataIndex: 'acara',
            width: '15%',
        },
        {
            title: 'Keterangan',
            dataIndex: 'keterangan',
        },
        {
            title: 'Dari',
            dataIndex: 'dari',
            width: '17%',
            render: (_, item) => <div>{tanggalJamID(item.dari)}</div>
        },
        {
            title: 'Sampai',
            dataIndex: 'sampai',
            width: '17%',
            render: (_, item) => <div>{tanggalJamID(item.sampai)}</div>
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            width: '100px',
            render: (_, data) =>
                <div className={"flex gap-1"}>
                    {/*<EditButtonIcon onClick={() => handleEditClick(data)}/>*/}
                    <DetailButtonIcon onClick={() => handleDetailClick(data)}/>
                    {/*<DeleteButtonIcon onClick={() => handleDeleteClick(data)}/>*/}
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
