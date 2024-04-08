import { createFileRoute } from '@tanstack/react-router'
import StaffPage from "@/pages/staff/staff-page.tsx";

export const Route = createFileRoute('/staff/')({
  component: () => <StaffPage />
})
