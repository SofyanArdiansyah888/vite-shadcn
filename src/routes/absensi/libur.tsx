import {createFileRoute} from '@tanstack/react-router'
import LiburPage from "@/pages/absensi/libur/libur-page.tsx";

export const Route = createFileRoute('/absensi/libur')({
    component: () => <LiburPage/>
})
