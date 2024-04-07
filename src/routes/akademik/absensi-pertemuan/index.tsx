import { createFileRoute } from '@tanstack/react-router'
import AbsensiPertemuanPage from "@/pages/modul/akademik/absensi-pertemuan/absensi-pertemuan-page.tsx";

export const Route = createFileRoute('/akademik/absensi-pertemuan/')({
  component: () => <AbsensiPertemuanPage />
})
