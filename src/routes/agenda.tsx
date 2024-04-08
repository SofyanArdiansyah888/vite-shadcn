import {createFileRoute} from '@tanstack/react-router'
import AgendaPage from "@/pages/agenda/agenda-page.tsx";

export const Route = createFileRoute('/agenda')({
    component: () => <AgendaPage/>
})
