import { createFileRoute } from '@tanstack/react-router'
import JadwalPelajaranDetailPage from "@/pages/modul/akademik/jadwal-pelajaran/jadwal-pelajaran-detail-page.tsx";

export const Route = createFileRoute('/akademik/jadwal-pelajaran/kelas/$id')({
  component: () => <JadwalPelajaranDetailPage />
})
