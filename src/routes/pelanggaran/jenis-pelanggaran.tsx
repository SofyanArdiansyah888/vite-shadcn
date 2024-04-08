import {createFileRoute} from '@tanstack/react-router'
import JenisPelanggaranPage from "@/pages/pelanggaran/jenis-pelanggaran/jenis-pelanggaran-page.tsx";

export const Route = createFileRoute('/pelanggaran/jenis-pelanggaran')({
    component: () => <JenisPelanggaranPage/>
})
