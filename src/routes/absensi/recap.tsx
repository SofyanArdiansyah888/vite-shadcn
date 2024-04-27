import {createFileRoute} from '@tanstack/react-router'
import RecapPage from "@/pages/absensi/recap/recap-page.tsx";

export const Route = createFileRoute('/absensi/recap')({
    component: () => <RecapPage/>
})
