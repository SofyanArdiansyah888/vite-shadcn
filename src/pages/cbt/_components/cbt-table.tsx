import {Table, TableProps} from "antd";
import {ButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {useGetList} from "@/hooks/useApi.tsx";
import {IUseParams} from "@/hooks/useParams.tsx";
import {Dispatch} from "react";

import {IDetailInfoModal} from "@/components/shared/modal/detail-modal.tsx";
import CBTEntity from "@/pages/cbt/_data/cbt.entity.ts";
import {tanggalID} from "@/lib/formatter.ts";
import {PaperPlaneIcon} from "@radix-ui/react-icons";
import {Link} from "@tanstack/react-router";

export default function CbtTable({handleGroupModal, params, setDetail, setSelectedData}: {
    params: IUseParams,
    handleGroupModal: (key: string, value: boolean) => void,
    setSelectedData: Dispatch<CBTEntity>
    setDetail: Dispatch<IDetailInfoModal[]>
}) {

    const {data, isLoading} = useGetList<CBTEntity[]>({
        endpoint: "/cbt",
        name: "cbt",
        params
    })

    function handleEditClick(data: CBTEntity) {
        // setSelectedData({
        //     ...data,
        //     waktu_ujian: tanggalJamID(data.waktu_ujian)
        // })
        handleGroupModal("modal", true)
    }

    function handleDetailClick(data: CBTEntity) {
        const temp = Object.entries(data)
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

    const columns: TableProps<CBTEntity>['columns'] = [

        {
            title: 'Tahun Ajaran',
            dataIndex: 'tahun_ajaran',
            sorter: true,
        },
        {
            title: 'Mata Pelajaran',
            dataIndex: 'mata_pelajaran',
            sorter: true,
        },

        {
            title: 'Kelas',
            dataIndex: 'kelas',
            sorter: true,
        },
        {
            title: 'Ujian',
            dataIndex: 'nama_ujian',
            sorter: true,
        },
        {
            title: 'Waktu',
            dataIndex: 'waktu_ujian',
            sorter: true,
        },
        {
            title: 'Durasi',
            dataIndex: 'durasi',
            sorter: true,
        },

        {
            title: 'Action',
            dataIndex: 'operation',
            width: '100px',
            render: (_, data) =>
                <div className={"flex gap-1"}>
                    <DetailButtonIcon onClick={() => handleDetailClick(data)}/>
                    <EditButtonIcon onClick={() => handleEditClick(data)}/>
                    <Link to={"/cbt/create-soal"}>
                    <ButtonIcon
                        icon={<PaperPlaneIcon />}
                        tooltip={"Edit Soal"}
                    />
                    </Link>
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
