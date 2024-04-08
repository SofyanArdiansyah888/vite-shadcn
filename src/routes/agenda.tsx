import {createFileRoute} from '@tanstack/react-router'
import AgendaPage from "@/pages/modul/agenda/agenda-page.tsx";

export const Route = createFileRoute('/agenda')({
    component: () => <AgendaPage/>
})
