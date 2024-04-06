import {Table} from "antd";
import React, {useState} from "react";
import {DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";

interface Item {
    key: string;
    name: string;
    age: string;
    address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edward ${i}`,
        age: "Laki-laki",
        address: `London Park no. ${i}`,
    });
}

export default function StaffTable() {
    const [data] = useState(originData);
    const cancel = () => {
    };

    const columns = [
        {
            title: 'Nama Staff',
            dataIndex: 'name',
            width: '25%',
            sorter: true,
        },
        {
            title: 'Jenis Kelamin',
            dataIndex: 'age',
            width: '15%',
        },
        {
            title: 'Nik',
            dataIndex: 'address',
            // width: '40%',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            width: '100px',
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render: (_: never, record: Item) =>
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
    />
}
