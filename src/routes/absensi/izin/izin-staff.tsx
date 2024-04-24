import { createFileRoute } from '@tanstack/react-router'
import IzinStaffPage from "@/pages/absensi/izin/izin-staff/izin-staff-page.tsx";

export const Route = createFileRoute('/absensi/izin/izin-staff')({
  component: () => <IzinStaffPage />
})
