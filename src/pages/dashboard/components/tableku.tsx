import React, {useState} from 'react';
import {Badge, Form, Input, InputNumber, Popconfirm, Table, Typography} from 'antd';
import {Button} from "@/components/ui/button.tsx";
import {XCircleIcon} from "lucide-react";

interface Item {
    key: string;
    name: string;
    age: number;
    address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
                                                       editing,
                                                       dataIndex,
                                                       title,
                                                       inputType,
                                                       // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                                       record,
                                                       // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                                       index,
                                                       children,
                                                       ...restProps
                                                   }) => {
    const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{margin: 0}}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const Tableku: React.FC = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record: Item) => record.key === editingKey;

    const edit = (record: Partial<Item> & { key: React.Key }) => {
        form.setFieldsValue({name: '', age: '', address: '', ...record});
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;

            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: 'age',
            dataIndex: 'age',
            width: '15%',
            editable: true,
        },
        {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
            <Typography.Link onClick={() => save(record.key)} style={{marginRight: 8}}>
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    function handleAddClick() {
        setData([
            {
                key: "",
                name: "",
                age: 0,
                address: "",
            },
            ...data
        ])
    }

    return (<>
            <div className={"flex justify-between  py-2 gap-1"}>
                <div className={"overscroll-x-auto "}>
                    <div className={"flex flex-row flex-wrap  gap-1 py-1  "}>
                        <Badge
                            size={"small"}
                            className={"border-[1px] p-2 rounded-lg flex gap-1 text-center items-center text-xs"}>
                            Jenis Kendaraan
                            <XCircleIcon className={"w-4 h-4 text-zinc-500 cursor-pointer"}/>
                        </Badge>
                        <Badge
                            size={"small"}
                            className={"border-[1px] p-2 rounded-lg flex gap-1 text-center items-center text-xs"}>
                            Jenis Kendaraan
                            <XCircleIcon className={"w-4 h-4 text-zinc-500 cursor-pointer"}/>
                        </Badge>
                        <Badge
                            size={"small"}
                            className={"border-[1px] p-2 rounded-lg flex gap-1 text-center items-center text-xs"}>
                            Jenis Kendaraan
                            <XCircleIcon className={"w-4 h-4 text-zinc-500 cursor-pointer"}/>
                        </Badge>
                        <Badge
                            size={"small"}
                            className={"border-[1px] p-2 rounded-lg flex gap-1 text-center items-center text-xs"}>
                            Jenis Kendaraan
                            <XCircleIcon className={"w-4 h-4 text-zinc-500 cursor-pointer"}/>
                        </Badge>
                        <Badge
                            size={"small"}
                            className={"border-[1px] p-2 rounded-lg flex gap-1 text-center items-center text-xs"}>
                            Jenis Kendaraan
                            <XCircleIcon className={"w-4 h-4 text-zinc-500 cursor-pointer"}/>
                        </Badge>
                        <Badge
                            size={"small"}
                            className={"border-[1px] p-2 rounded-lg flex gap-1 text-center items-center text-xs"}>
                            Jenis Kendaraan
                            <XCircleIcon className={"w-4 h-4 text-zinc-500 cursor-pointer"}/>
                        </Badge>
                        <Badge
                            size={"small"}
                            className={"border-[1px] p-2 rounded-lg flex gap-1 text-center items-center text-xs"}>
                            Jenis Kendaraan
                            <XCircleIcon className={"w-4 h-4 text-zinc-500 cursor-pointer"}/>
                        </Badge>
                        <Badge
                            size={"small"}
                            className={"border-[1px] p-2 rounded-lg flex gap-1 text-center items-center text-xs"}>
                            Jenis Kendaraan
                            <XCircleIcon className={"w-4 h-4 text-zinc-500 cursor-pointer"}/>
                        </Badge>
                        <Badge
                            size={"small"}
                            className={"border-[1px] border-primary text-primary cursor-pointer p-2 rounded-lg flex gap-1 text-center items-center text-xs"}>
                            Hapus Semua
                        </Badge>


                    </div>
                </div>
                <Button onClick={handleAddClick} size={"sm"} variant={"primary"} className={"text-xs"}>+
                    Tambah</Button>
            </div>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                    size={"small"}
                    scroll={{
                        y: 400
                    }}
                />
            </Form>
        </>

    );
};

export default Tableku;
