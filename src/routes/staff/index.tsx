import { createFileRoute } from '@tanstack/react-router'
import StaffPage from "@/pages/modul/staff/staff.tsx";

export const Route = createFileRoute('/staff/')({
  component: () => <StaffPage />
})
