import {createFileRoute} from '@tanstack/react-router'
import PortalPage from "@/pages/main/portal/portal.tsx";

export const Route =
    createFileRoute('/')({
        component: PortalPage
    })
