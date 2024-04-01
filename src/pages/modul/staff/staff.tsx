import React, {useState} from 'react';
import {Input, Table} from 'antd';
import {AddButton, DeleteButtonIcon, DetailButtonIcon, EditButtonIcon} from "@/components/ui/button.tsx";
import {Link} from "@tanstack/react-router";
import {Separator} from "@/components/ui/separator.tsx";
import {BadgeDeleteFilter, BadgeFilter} from "@/components/ui/custom-badge.tsx";
import StaffLayout from "@/components/layout/staff-layout.tsx";
import StaffFilter from "@/pages/modul/staff/staff-filter.tsx";

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


const StaffPage: React.FC = () => {
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
    const {Search} = Input
    return (<StaffLayout>
            <section className={"px-12 py-4"}>

                <div className="flex items-center justify-between">
                    <div className="space-y-1 my-2">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            List Staff
                        </h2>
                        {/*<p className="text-sm text-muted-foreground">*/}
                        {/*    Top picks for you. Updated daily.*/}
                        {/*</p>*/}
                    </div>
                    <div className={"flex gap-1"}>
                        <Search placeholder="Search Music" onSearch={() => {
                        }} enterButton/>
                        <StaffFilter/>
                    </div>
                </div>

                <Separator className=""/>

                <div className={"flex justify-between  py-2 gap-1"}>
                    <div className={"overscroll-x-auto "}>
                        <div className={"flex flex-row flex-wrap  gap-1 py-1  "}>
                            <BadgeFilter title={"Suzuki"}/>
                            <BadgeFilter title={"Hitam"}/>
                            <BadgeDeleteFilter/>
                        </div>
                    </div>
                    <Link to={"/staff/create"}>
                        <AddButton/>
                    </Link>
                </div>

                <Table
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

            </section>
        </StaffLayout>

    );
};

export default StaffPage;
