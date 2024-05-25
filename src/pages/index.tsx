import {createFileRoute} from '@tanstack/react-router'
import PortalPage from "@/pages/portal";


export const Route =
    createFileRoute('/')({
        component: PortalPage
    })