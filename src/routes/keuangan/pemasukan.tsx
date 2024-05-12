import {createFileRoute} from '@tanstack/react-router'
import PemasukanPage from "@/pages/keuangan/pemasukan/pemasukan-page.tsx";

export const Route = createFileRoute('/keuangan/pemasukan')({
    component: () => <PemasukanPage/>
})
