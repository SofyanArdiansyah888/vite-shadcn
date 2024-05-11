import {createFileRoute} from '@tanstack/react-router'
import SaldoKasPage from "@/pages/keuangan/referensi/saldo-kas/saldo-kas-page.tsx";

export const Route = createFileRoute('/keuangan/referensi/saldo-kas')({
    component: () => <SaldoKasPage/>
})
