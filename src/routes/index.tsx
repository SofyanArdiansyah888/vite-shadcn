import {createFileRoute} from '@tanstack/react-router'
import PortalPage from "@/pages/portal/portal.tsx";

export const Route =
    createFileRoute('/')({
        component: PortalPage
    })
