import { createFileRoute } from '@tanstack/react-router'
import MatapelajaranPage from "@/pages/akademik/referensi/matapelajaran/matapelajaran-page.tsx";

export const Route = createFileRoute('/akademik/referensi/matapelajaran')({
  component: () => <MatapelajaranPage />
})
