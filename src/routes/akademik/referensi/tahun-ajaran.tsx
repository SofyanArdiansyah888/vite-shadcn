import { createFileRoute } from '@tanstack/react-router'
import TahunAjaranPage from "@/pages/modul/akademik/referensi/tahun-ajaran/tahun-ajaran-page.tsx";

export const Route = createFileRoute('/akademik/referensi/tahun-ajaran')({
  component: () => <TahunAjaranPage />
})
