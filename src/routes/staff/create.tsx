import {createFileRoute} from '@tanstack/react-router'
import StaffCreatePage from "@/pages/staff/staff-create-page.tsx";

export const Route = createFileRoute('/staff/create')({
    component: () => <StaffCreatePage/>
})
