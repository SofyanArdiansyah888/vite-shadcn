import { createFileRoute } from '@tanstack/react-router'
import MataPelajaranPage from "@/pages/akademik/referensi/mata-pelajaran/mata-pelajaran-page.tsx";

export const Route = createFileRoute('/akademik/referensi/mata-pelajaran')({
  component: () => <MataPelajaranPage />
})
