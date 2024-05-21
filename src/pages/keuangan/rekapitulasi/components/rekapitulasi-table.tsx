import {Table, TableProps} from "antd";
import {useGetList} from "@/hooks/useApi.tsx";
import {formatRupiah} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import RekapitulasiKeuanganEntity from "@/pages/keuangan/rekapitulasi/data/rekapitulasi-keuangan.entity.ts";


export default function RekapitulasiTable({params}: {
    params: IUseParams,
}) {


    // const {data, isLoading} = useGetList<RekapitulasiKeuanganEntity[]>({
    //     endpoint: "/staff",
    //     name: "staff",
    //     params
    // })
    const data: RekapitulasiKeuanganEntity[] = [
        {
            transaksi: "Saldo Kas",
            nominal: 100000,
            details: []
        },
        {
            transaksi: "Pemasukan",
            nominal: 100000,
            details: [
                {
                   nama: "Keuntungan kantin sekolah",
                   nominal: 100000
                }
            ]
        },
    ]

    const columns: TableProps<RekapitulasiKeuanganEntity>['columns'] = [
        {
            title: 'Transaksi',
            dataIndex: 'transaksi',
        },
        {
            title: 'Nominal',
            dataIndex: 'nominal',
            width: "200px",
            render: (_,item) => formatRupiah(item.nominal)
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
        expandable={{
            expandedRowRender: (record) => <div className={"flex justify-between px-24"}>
                {
                    record?.details?.map((item) => {
                        return <>
                            <div>
                                {item.nama}
                            </div>
                            <div>
                                {formatRupiah(item.nominal)}
                            </div>
                        </>
                    })
                }

            </div>,
            rowExpandable: (record) => true,
        }}
        size={"small"}
        scroll={{
            y: 400
        }}
        // loading={isLoading}
    />
}
