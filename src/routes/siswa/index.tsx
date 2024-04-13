import { createFileRoute } from '@tanstack/react-router'
import SiswaPage from "@/pages/siswa/siswa-page.tsx";

export const Route = createFileRoute('/siswa/')({
  component: () => <SiswaPage />
})
