import {createFileRoute} from '@tanstack/react-router'
import AbsensiPage from "@/pages/absensi/absensi/absensi-page.tsx";

export const Route = createFileRoute('/absensi/')({
    component: () => <AbsensiPage/>
})
