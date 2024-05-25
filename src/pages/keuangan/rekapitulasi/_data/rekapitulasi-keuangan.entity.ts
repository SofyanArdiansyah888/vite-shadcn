export default interface RekapitulasiKeuanganEntity {
    id?: string,
    transaksi: string,
    nominal: number,
    details: {
        nama: string,
        nominal: number
    }[],
    created_at?: string,
    updated_at?: string,
}
