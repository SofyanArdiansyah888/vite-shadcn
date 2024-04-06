import { createFileRoute } from '@tanstack/react-router'
import MatapelajaranPage from "@/pages/modul/akademik/referensi/matapelajaran/matapelajaran-page.tsx";

export const Route = createFileRoute('/akademik/referensi/matapelajaran')({
  component: () => <MatapelajaranPage />
})
