import { createFileRoute } from '@tanstack/react-router'
import PenggunaPage from "@/pages/pengguna/(pengguna)/pengguna-page.tsx";

export const Route = createFileRoute('/pengguna/')({
  component: () => <PenggunaPage />
})