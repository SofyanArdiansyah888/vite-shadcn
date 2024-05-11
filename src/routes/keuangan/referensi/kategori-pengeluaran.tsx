import {createFileRoute} from '@tanstack/react-router'
import KategoriPengeluaranPage from "@/pages/keuangan/referensi/kategori-pengeluaran/kategori-pengeluaran-page.tsx";

export const Route = createFileRoute('/keuangan/referensi/kategori-pengeluaran')({
    component: () => <KategoriPengeluaranPage/>
})
