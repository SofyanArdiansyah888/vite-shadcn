import {createFileRoute} from '@tanstack/react-router'
import JadwalPelajaranPage from "@/pages/modul/akademik/jadwal-pelajaran/jadwal-pelajaran-page.tsx";

export const Route = createFileRoute('/akademik/jadwal-pelajaran/')({
    component: () => <JadwalPelajaranPage/>
})