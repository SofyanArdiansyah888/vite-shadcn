import { createFileRoute } from '@tanstack/react-router'
import TagihanSppPage from "@/pages/keuangan/spp/tagihan/tagihan-spp-page.tsx";

export const Route = createFileRoute('/keuangan/spp/tagihan')({
  component: () => <TagihanSppPage />
})
