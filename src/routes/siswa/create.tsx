import { createFileRoute } from '@tanstack/react-router'
import SiswaCreatePage from "@/pages/siswa/siswa-create-page.tsx";

export const Route = createFileRoute('/siswa/create')({
  component: () => <SiswaCreatePage />
})
