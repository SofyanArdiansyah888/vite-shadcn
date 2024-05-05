import { createFileRoute } from '@tanstack/react-router'
import TunjanganPage from "@/pages/penggajian/tunjangan/tunjangan-page.tsx";

export const Route = createFileRoute('/penggajian/referensi/tunjangan')({
  component: () => <TunjanganPage />
})
