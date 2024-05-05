import { createFileRoute } from '@tanstack/react-router'
import HonorGuruPage from "@/pages/penggajian/honor-guru/honor-guru-page.tsx";

export const Route = createFileRoute('/penggajian/referensi/honor-guru')({
  component: () => <HonorGuruPage />
})
