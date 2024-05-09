import {createFileRoute} from '@tanstack/react-router'
import ProfilGajiStaffPage from "@/pages/penggajian/profil-gaji-staff/profil-gaji-staff-page.tsx";

export const Route = createFileRoute('/penggajian/profil-gaji-staff')({
    component: () => <ProfilGajiStaffPage/>
})
