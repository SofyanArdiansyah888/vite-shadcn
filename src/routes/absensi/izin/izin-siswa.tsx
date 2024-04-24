import { createFileRoute } from '@tanstack/react-router'
import IzinSiswaPage from "@/pages/absensi/izin/izin-siswa/izin-siswa-page.tsx";

export const Route = createFileRoute('/absensi/izin/izin-siswa')({
  component: () => <IzinSiswaPage />
})
