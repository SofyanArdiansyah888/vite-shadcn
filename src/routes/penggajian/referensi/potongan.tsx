import { createFileRoute } from '@tanstack/react-router'
import PotonganPage from "@/pages/penggajian/potongan/potongan-page.tsx";

export const Route = createFileRoute('/penggajian/referensi/potongan')({
  component: () => <PotonganPage />
})
