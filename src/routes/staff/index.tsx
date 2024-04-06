import { createFileRoute } from '@tanstack/react-router'
import StaffPage from "@/pages/modul/staff/staff-page.tsx";

export const Route = createFileRoute('/staff/')({
  component: () => <StaffPage />
})
