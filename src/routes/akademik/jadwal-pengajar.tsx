import { createFileRoute } from '@tanstack/react-router'
import JadwalPengajarPage from "@/pages/modul/akademik/jadwal-pengajar/jadwal-pengajar-page.tsx";

export const Route = createFileRoute('/akademik/jadwal-pengajar')({
  component: () => <JadwalPengajarPage />
})
