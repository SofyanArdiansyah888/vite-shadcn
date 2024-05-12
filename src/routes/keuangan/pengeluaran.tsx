import {createFileRoute} from '@tanstack/react-router'
import PengeluaranPage from "@/pages/keuangan/pengeluaran/pengeluaran-page.tsx";

export const Route = createFileRoute('/keuangan/pengeluaran')({
    component: () => <PengeluaranPage/>
})
