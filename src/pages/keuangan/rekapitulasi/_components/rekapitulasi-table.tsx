import {Table, TableColumnsType} from "antd";
import {formatRupiah} from "@/lib/formatter.ts";
import {IUseParams} from "@/hooks/useParams.tsx";
import RekapitulasiKeuanganEntity from "@/pages/keuangan/rekapitulasi/_data/rekapitulasi-keuangan.entity.ts";


export default function RekapitulasiTable({params}: {
    params: IUseParams,
}) {


    // const {data, isLoading} = useGetList<RekapitulasiKeuanganEntity[]>({
    //     endpoint: "/staff",
    //     name: "staff",
    //     params
    // })
    type ExtendedEntity = RekapitulasiKeuanganEntity & { key?: React.Key };
    const data: ExtendedEntity[] = [
        {
            key:"1",
            transaksi: "Saldo Kas",
            nominal: 100000,
            details: []
        },
        {
            key:"2",
            transaksi: "Pemasukan",
            nominal: 100000,
            details: [
                {
                    nama: "Keuntungan kantin sekolah",
                    nominal: 100000
                },
                {
                    nama: "Dana Bos Tahap I",
                    nominal: 100000
                },
            ]
        },
        {
            key:"3",
            transaksi: "SPP Siswa",
            nominal: 100000,
            details: [
                {
                    nama: "Keuntungan kantin sekolah",
                    nominal: 100000
                },
                {
                    nama: "Dana Bos Tahap I",
                    nominal: 100000
                },
            ]
        },
        {
            key:"4",
            transaksi: "Pembayaran Siswa",
            nominal: 100000,
            details: [
                {
                    nama: "Keuntungan kantin sekolah",
                    nominal: 100000
                },
                {
                    nama: "Dana Bos Tahap I",
                    nominal: 100000
                },
            ]
        },
        {
            key:"5",
            transaksi: "Pengeluaran",
            nominal: 100000,
            details: [
                {
                    nama: "Keuntungan kantin sekolah",
                    nominal: 100000
                },
                {
                    nama: "Dana Bos Tahap I",
                    nominal: 100000
                },
            ]
        },
        {
            key:"6",
            transaksi: "Saldo Akhir",
            nominal: 100000,
            details: []
        },
    ]

    const columns: TableColumnsType<RekapitulasiKeuanganEntity> = [
        {
            title: 'Transaksi',
            dataIndex: 'transaksi',
            key: 'transaksi',
            render: (_, item) => <span className={"font-semibold"} key={item.id}>{item.transaksi}</span>
        },
        {
            title: 'Nominal',
            dataIndex: 'nominal',
            key: 'nominal',
            width: "200px",
            render: (_, item) => <span className={"font-semibold"}>{formatRupiah(item.nominal)}</span>
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
            expandedRowRender: (record) => <ul className={" list-disc"}>
                {
                    record?.details?.map((item) => {
                        return <li className={"flex justify-between even:bg-slate-50 odd:bg-white pl-16 pr-[140px]"}>
                            <div>
                                {item.nama}
                            </div>
                            <div className={"text-right"}>
                                {formatRupiah(item.nominal)}
                            </div>
                        </li>
                    })
                }
            </ul>,
            rowExpandable: (record) => !["Saldo Kas","Saldo Akhir"].includes(record.transaksi),
        }}
        size={"small"}
        scroll={{
            y: 400
        }}
        // loading={isLoading}
    />
}
