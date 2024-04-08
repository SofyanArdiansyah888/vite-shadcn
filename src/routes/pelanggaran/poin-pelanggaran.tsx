import {createFileRoute} from '@tanstack/react-router'
import PoinPelanggaranPage from "@/pages/pelanggaran/point-pelanggaran/poin-pelanggaran-page.tsx";

export const Route = createFileRoute('/pelanggaran/poin-pelanggaran')({
    component: () => <PoinPelanggaranPage/>
})
