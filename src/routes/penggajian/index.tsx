import { createFileRoute } from '@tanstack/react-router'
import PenggajianPage from "@/pages/penggajian/(penggajian)/penggajian-page.tsx";

export const Route = createFileRoute('/penggajian/')({
  component: () => <PenggajianPage />
})
