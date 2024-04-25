import {createFileRoute} from '@tanstack/react-router'
import JadwalPage from "@/pages/absensi/jadwal/jadwal-page.tsx";

export const Route = createFileRoute('/absensi/jadwal')({
    component: () => <JadwalPage/>
})
